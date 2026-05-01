// ==============================================
// Skool Classroom Scraper - הרץ בקונסול הדפדפן
// ==============================================
// 1. היכנס ל: https://www.skool.com/vip-1657/classroom
// 2. פתח DevTools (F12) → Console
// 3. העתק והדבק את כל הסקריפט הזה ולחץ Enter
// 4. חכה עד שהקובץ יורד אוטומטית
// ==============================================

(async function scrapeSkoolClassroom() {
  const DELAY = 1500; // המתנה בין לחיצות (ms)
  const lessons = [];

  const sleep = ms => new Promise(r => setTimeout(r, ms));

  console.log('🚀 מתחיל לגרד את ה-Classroom...');

  // --- שיטה 1: חילוץ מה-DOM הנוכחי ---
  function scrapeCurrentPage() {
    const results = [];

    // מחפש מודולים (Skool משתמש בכמה מבנים)
    const moduleSelectors = [
      '[class*="module"]',
      '[class*="Module"]',
      '[class*="curriculum"]',
      '[class*="section"]',
      '[class*="category"]',
      '.styled-box',
      '[data-testid*="module"]',
      '[data-testid*="section"]'
    ];

    // מחפש שיעורים
    const lessonSelectors = [
      'a[href*="/classroom/"]',
      '[class*="lesson"]',
      '[class*="Lesson"]',
      '[class*="post"]',
      '[class*="Post"]',
      '[class*="item"]',
      '[data-testid*="lesson"]',
      '[data-testid*="post"]'
    ];

    // ניסיון ראשון: לינקים ל-classroom
    const classroomLinks = document.querySelectorAll('a[href*="/classroom/"]');
    if (classroomLinks.length > 0) {
      console.log(`✅ נמצאו ${classroomLinks.length} לינקים ל-classroom`);
      classroomLinks.forEach(link => {
        const title = link.textContent?.trim() ||
                      link.querySelector('h1,h2,h3,h4,h5,p,span')?.textContent?.trim() || '';
        const href = link.href || link.getAttribute('href') || '';
        const parent = link.closest('[class*="module"], [class*="section"], [class*="category"]');
        const moduleName = parent?.querySelector('h1,h2,h3,h4')?.textContent?.trim() || '';

        // חיפוש תיאור
        const desc = link.querySelector('[class*="desc"], [class*="subtitle"], [class*="preview"]')?.textContent?.trim() ||
                     link.parentElement?.querySelector('[class*="desc"], [class*="subtitle"], [class*="preview"]')?.textContent?.trim() || '';

        if (title && href) {
          results.push({ module: moduleName, title, description: desc, url: href });
        }
      });
    }

    // ניסיון שני: כל הלינקים בתוך הדף
    if (results.length === 0) {
      console.log('🔍 מנסה שיטה חלופית...');
      const allLinks = document.querySelectorAll('a[href*="/vip-1657/"]');
      allLinks.forEach(link => {
        const href = link.href || '';
        if (href.includes('/classroom') && href !== window.location.href) {
          const title = link.textContent?.trim() || '';
          if (title && title.length > 2 && title.length < 500) {
            results.push({ module: '', title, description: '', url: href });
          }
        }
      });
    }

    return results;
  }

  // --- שיטה 2: ניסיון לחלץ מ-React state / __NEXT_DATA__ ---
  function scrapeFromReactState() {
    const results = [];

    // Next.js data
    if (window.__NEXT_DATA__) {
      console.log('📦 נמצא Next.js data, מחלץ...');
      const data = JSON.stringify(window.__NEXT_DATA__);
      // מחפש מבנים של שיעורים
      try {
        const props = window.__NEXT_DATA__?.props?.pageProps;
        if (props) {
          const findLessons = (obj, path = '') => {
            if (!obj || typeof obj !== 'object') return;
            if (Array.isArray(obj)) {
              obj.forEach((item, i) => findLessons(item, `${path}[${i}]`));
              return;
            }
            // מחפש אובייקטים שנראים כמו שיעורים
            if (obj.title || obj.name) {
              const title = obj.title || obj.name || '';
              const desc = obj.description || obj.body || obj.preview || obj.subtitle || '';
              const url = obj.url || obj.href || obj.slug || obj.id || '';
              if (title) {
                results.push({
                  module: obj.module || obj.section || obj.category || '',
                  title,
                  description: typeof desc === 'string' ? desc.substring(0, 500) : '',
                  url: url.startsWith('http') ? url : `https://www.skool.com/vip-1657/classroom/${url}`
                });
              }
            }
            Object.values(obj).forEach((val, i) => findLessons(val, `${path}.${Object.keys(obj)[i]}`));
          };
          findLessons(props);
        }
      } catch(e) {
        console.log('⚠️ שגיאה בחילוץ מ-Next.js:', e.message);
      }
    }

    // React Fiber
    try {
      const rootEl = document.getElementById('__next') || document.getElementById('root') || document.querySelector('[data-reactroot]');
      if (rootEl?._reactRootContainer || rootEl?.__reactFiber$) {
        console.log('⚛️ נמצא React state');
      }
    } catch(e) {}

    return results;
  }

  // --- שיטה 3: סריקה עם גלילה וקליקים ---
  async function scrapeWithNavigation() {
    const results = [];

    // מוצא את כל הכותרות של מודולים בסיידבר
    const sidebar = document.querySelector('[class*="sidebar"], [class*="Sidebar"], nav, aside');
    if (!sidebar) {
      console.log('⚠️ לא נמצא סיידבר, סורק את כל הדף');
    }

    const container = sidebar || document;

    // מחפש אלמנטים שניתנים ללחיצה (מודולים)
    const clickableModules = container.querySelectorAll(
      '[class*="module"] > *, [class*="Module"] > *, [class*="accordion"] > *, [role="button"], [class*="expandable"]'
    );

    if (clickableModules.length > 0) {
      console.log(`📂 נמצאו ${clickableModules.length} מודולים, פותח אותם...`);
      for (const mod of clickableModules) {
        mod.click();
        await sleep(DELAY);

        const newLessons = scrapeCurrentPage();
        newLessons.forEach(l => {
          if (!results.find(r => r.url === l.url)) {
            results.push(l);
          }
        });
      }
    }

    // גלילה לתחתית הדף כדי לטעון הכל
    const scrollContainer = document.querySelector('[class*="scroll"], [class*="content"], main') || document.documentElement;
    let lastHeight = 0;
    for (let i = 0; i < 10; i++) {
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
      await sleep(800);
      if (scrollContainer.scrollHeight === lastHeight) break;
      lastHeight = scrollContainer.scrollHeight;
    }

    // סריקה אחרונה אחרי הגלילה
    const finalScrape = scrapeCurrentPage();
    finalScrape.forEach(l => {
      if (!results.find(r => r.url === l.url)) {
        results.push(l);
      }
    });

    return results;
  }

  // --- הרצת כל השיטות ---

  // שיטה 1
  let results = scrapeCurrentPage();
  console.log(`שיטה 1: נמצאו ${results.length} שיעורים`);

  // שיטה 2
  const reactResults = scrapeFromReactState();
  console.log(`שיטה 2: נמצאו ${reactResults.length} שיעורים`);
  reactResults.forEach(l => {
    if (!results.find(r => r.title === l.title)) {
      results.push(l);
    }
  });

  // שיטה 3
  const navResults = await scrapeWithNavigation();
  console.log(`שיטה 3: נמצאו ${navResults.length} שיעורים`);
  navResults.forEach(l => {
    if (!results.find(r => r.url === l.url && r.title === l.title)) {
      results.push(l);
    }
  });

  // ניקוי כפילויות
  const unique = [];
  const seen = new Set();
  results.forEach(r => {
    const key = r.title + r.url;
    if (!seen.has(key) && r.title) {
      seen.add(key);
      unique.push(r);
    }
  });

  console.log(`\n📊 סה"כ נמצאו ${unique.length} שיעורים ייחודיים`);

  if (unique.length === 0) {
    console.log('\n❌ לא נמצאו שיעורים. נסה את הפתרון הידני:');
    console.log('1. ודא שאתה מחובר ונמצא בדף classroom');
    console.log('2. הרץ את הפקודה הבאה כדי לראות את מבנה הדף:');
    console.log('   document.querySelectorAll("a").forEach(a => console.log(a.href, a.textContent.trim().substring(0,50)))');
    console.log('\n3. או הרץ את זה כדי לראות את כל ה-classes:');
    console.log('   [...new Set([...document.querySelectorAll("*")].flatMap(e => [...e.classList]))].filter(c => /lesson|module|course|post|class/i.test(c)).forEach(c => console.log(c))');
    return;
  }

  // --- ייצוא ל-CSV ---
  const BOM = '\uFEFF'; // תמיכה בעברית באקסל
  const csvHeader = 'מספר,מודול,שם השיעור,תיאור,לינק\n';
  const csvRows = unique.map((l, i) => {
    const clean = str => `"${(str || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`;
    return `${i + 1},${clean(l.module)},${clean(l.title)},${clean(l.description)},${clean(l.url)}`;
  }).join('\n');

  const csvContent = BOM + csvHeader + csvRows;
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'skool-classroom-export.csv';
  a.click();
  URL.revokeObjectURL(url);

  console.log('✅ הקובץ הורד! פתח אותו באקסל.');
  console.log('\n📋 תצוגה מקדימה:');
  console.table(unique.slice(0, 10));

  return unique;
})();
