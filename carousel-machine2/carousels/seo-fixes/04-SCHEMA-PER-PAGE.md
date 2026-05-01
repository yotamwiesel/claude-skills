# JSON-LD Schema — Per Page

Each block goes into the specific page's custom code header in Kajabi:
**Kajabi → Pages → [Select Page] → Settings (gear) → Custom Code → Header**

---

## Homepage (/)

> Already covered by site-wide header (Organization + WebSite schemas)
> No additional page-specific schema needed.

---

## Course Page (/ecommerce-dropshipping-course)

```html
<!-- PASTE IN: Course page → Settings → Custom Code → Header -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Ecom Hackers - קורס איקומרס ודרופשיפינג",
  "description": "קורס מקיף לבניית עסק איקומרס רווחי עם שופיפיי. כולל דרופשיפינג, מחקר מוצר, שיווק דיגיטלי, פרסום ממומן וליווי אישי.",
  "url": "https://www.avivmalka.com/ecommerce-dropshipping-course",
  "provider": {
    "@type": "Organization",
    "name": "אביב מלכה - Ecom Hackers",
    "url": "https://www.avivmalka.com"
  },
  "instructor": {
    "@type": "Person",
    "name": "אביב מלכה",
    "url": "https://www.avivmalka.com/about"
  },
  "inLanguage": "he",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT40H"
  },
  "offers": {
    "@type": "Offer",
    "category": "Paid",
    "priceCurrency": "ILS",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "5174"
  }
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "כמה זה הולך לעלות לי?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "הקורס זמין במחיר מוזל משמעותית מהמחיר הרגיל. המחיר עשוי לעלות ללא התראה מראש. כולל גישה מלאה לכל התכנים, עדכונים עתידיים, קהילה פעילה והחזר כספי 30 יום."
      }
    },
    {
      "@type": "Question",
      "name": "האם הקורס מתאים למתחילים?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "כן, הקורס מתחיל מהבסיס ומלווה אותך שלב אחר שלב - מהיכרות והקמה, דרך מחקר מוצר ונישה, ועד לשיווק ופרסום מתקדם."
      }
    },
    {
      "@type": "Question",
      "name": "האם יש ליווי אישי?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "כן, הקורס כולל ליווי אישי, קהילה פעילה של תלמידים, ותמיכה שוטפת. אביב מלכה ואנשי הצוות זמינים לשאלות ולהכוונה."
      }
    }
  ]
}
</script>
```

---

## About Page (/about)

```html
<!-- PASTE IN: About page → Settings → Custom Code → Header -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "אביב מלכה",
  "alternateName": "Aviv Malka",
  "url": "https://www.avivmalka.com/about",
  "image": "https://www.avivmalka.com/about-photo.jpg",
  "jobTitle": "מייסד ומנטור איקומרס",
  "description": "יזם איקומרס עם 13+ שנות נסיון, מייסד Aviv Media, ומנטור לאלפי בעלי עסקים דיגיטליים בישראל.",
  "knowsAbout": [
    "ecommerce",
    "dropshipping",
    "Shopify",
    "digital marketing",
    "Facebook Ads",
    "Google Ads"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": "NLP Practitioner"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": "NLP Master"
    }
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Aviv Media",
    "url": "https://www.avivmalka.com"
  },
  "sameAs": [
    "https://www.instagram.com/aviv_malka7",
    "https://www.youtube.com/@avivmalka",
    "https://www.facebook.com/groups/ecommercevaucher"
  ]
}
</script>
```

---

## Contact Page (/contact)

```html
<!-- PASTE IN: Contact page → Settings → Custom Code → Header -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "צור קשר - אביב מלכה",
  "url": "https://www.avivmalka.com/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "אביב מלכה - Ecom Hackers",
    "email": "hello@avivmalka.com",
    "url": "https://www.avivmalka.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@avivmalka.com",
      "contactType": "customer support",
      "availableLanguage": "Hebrew"
    }
  }
}
</script>
```

---

## Store/Courses Page (/store)

```html
<!-- PASTE IN: Store page → Settings → Custom Code → Header -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "קורסים - אביב מלכה",
  "description": "כל הקורסים של אביב מלכה לאיקומרס, דרופשיפינג ושופיפיי",
  "url": "https://www.avivmalka.com/store",
  "numberOfItems": 5,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Course",
        "name": "Ecom Hackers - קורס איקומרס מלא",
        "url": "https://www.avivmalka.com/ecommerce-dropshipping-course"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Course",
        "name": "אתגר 3 ימים",
        "url": "https://www.avivmalka.com/3-day-challenge-2023"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Course",
        "name": "קורס גוגל אדס",
        "url": "https://www.avivmalka.com/google-ads-course"
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Course",
        "name": "Pop-up & SMS/Email Automation",
        "url": "https://www.avivmalka.com/ecommerce-dropshipping-course"
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Course",
        "name": "אסטרטגיית שופיפיי - מיני קורס חינמי",
        "url": "https://www.avivmalka.com/shopify-strategy"
      }
    }
  ]
}
</script>
```

---

## Blog Posts — TEMPLATE (use for ALL blog posts)

For each blog post, paste this template and fill in the specific values:

```html
<!-- PASTE IN: Blog post → Settings → Custom Code → Header -->
<!-- Replace [TITLE], [SLUG], [DATE], [DESCRIPTION] with actual values -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[TITLE]",
  "url": "https://www.avivmalka.com/blog/[SLUG]",
  "datePublished": "[DATE in YYYY-MM-DD format]",
  "dateModified": "[DATE in YYYY-MM-DD format]",
  "author": {
    "@type": "Person",
    "name": "אביב מלכה",
    "url": "https://www.avivmalka.com/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "אביב מלכה - Ecom Hackers",
    "url": "https://www.avivmalka.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.avivmalka.com/logo.png"
    }
  },
  "description": "[DESCRIPTION - same as meta description]",
  "inLanguage": "he",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.avivmalka.com/blog/[SLUG]"
  }
}
</script>
```

### Pre-filled for existing blog posts:

**Blog: איקומרס 2026 (/blog/2026)**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "איך להרוויח כסף באיקומרס ב-2026: המדריך המלא למתחילים ולמתקדמים",
  "url": "https://www.avivmalka.com/blog/2026",
  "datePublished": "2026-04-09",
  "dateModified": "2026-04-09",
  "author": {"@type": "Person", "name": "אביב מלכה", "url": "https://www.avivmalka.com/about"},
  "publisher": {"@type": "Organization", "name": "אביב מלכה - Ecom Hackers", "url": "https://www.avivmalka.com"},
  "description": "המדריך המלא להרוויח כסף באיקומרס ב-2026 - בחירת נישה, בניית חנות שופיפיי, שיווק ומכירות. 6 שלבים מעשיים.",
  "inLanguage": "he",
  "mainEntityOfPage": {"@type": "WebPage", "@id": "https://www.avivmalka.com/blog/2026"}
}
</script>
```

**Blog: מוצרים רווחיים (/blog/5)**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "איך למצוא מוצרים רווחיים לדרופשיפינג – המדריך שלי להצלחה",
  "url": "https://www.avivmalka.com/blog/5",
  "datePublished": "2024-12-22",
  "dateModified": "2024-12-22",
  "author": {"@type": "Person", "name": "אביב מלכה", "url": "https://www.avivmalka.com/about"},
  "publisher": {"@type": "Organization", "name": "אביב מלכה - Ecom Hackers", "url": "https://www.avivmalka.com"},
  "description": "איך למצוא מוצרים רווחיים לדרופשיפינג - 3 שלבים מעשיים למציאת מוצר מנצח. מדריך מנסיון של 13 שנים באיקומרס.",
  "inLanguage": "he",
  "mainEntityOfPage": {"@type": "WebPage", "@id": "https://www.avivmalka.com/blog/5"}
}
</script>
```

---

## Shopify Strategy (/shopify-strategy)

```html
<!-- PASTE IN: Shopify Strategy page → Settings → Custom Code → Header -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "אסטרטגיית שופיפיי - מיני קורס חינמי",
  "description": "מיני קורס חינמי - למד איך ליצור עגלת קניות ממירה בשופיפיי ולהגדיל מכירות. כולל מדריך גוגל אדס בונוס.",
  "url": "https://www.avivmalka.com/shopify-strategy",
  "provider": {
    "@type": "Organization",
    "name": "אביב מלכה - Ecom Hackers"
  },
  "instructor": {
    "@type": "Person",
    "name": "אביב מלכה"
  },
  "inLanguage": "he",
  "isAccessibleForFree": true,
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online"
  }
}
</script>
```

---

## 3-Day Challenge (/3-day-challenge-2023)

```html
<!-- PASTE IN: 3-Day Challenge page → Settings → Custom Code → Header -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "אתגר 3 ימים - בנה חנות שופיפיי",
  "description": "אתגר 3 ימים עם אביב מלכה - בנה את חנות השופיפיי הראשונה שלך צעד אחר צעד. חינם.",
  "url": "https://www.avivmalka.com/3-day-challenge-2023",
  "provider": {
    "@type": "Organization",
    "name": "אביב מלכה - Ecom Hackers"
  },
  "instructor": {
    "@type": "Person",
    "name": "אביב מלכה"
  },
  "inLanguage": "he",
  "isAccessibleForFree": true,
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT6H"
  }
}
</script>
```

---

## Google Ads Course (/google-ads-course)

```html
<!-- PASTE IN: Google Ads Course page → Settings → Custom Code → Header -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "קורס גוגל אדס לאיקומרס",
  "description": "קורס גוגל אדס לאיקומרס עם אביב מלכה - למד להריץ קמפיינים רווחיים ולהגדיל מכירות בחנות שופיפיי שלך.",
  "url": "https://www.avivmalka.com/google-ads-course",
  "provider": {
    "@type": "Organization",
    "name": "אביב מלכה - Ecom Hackers"
  },
  "instructor": {
    "@type": "Person",
    "name": "אביב מלכה"
  },
  "inLanguage": "he",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online"
  }
}
</script>
```
