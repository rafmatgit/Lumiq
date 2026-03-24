# Lumiq — Platforma testów osobowości

Polska platforma psychometryczna. Minimalistyczny design, rzetelna nauka, AI po polsku.

## Struktura projektu

```
lumiq/
├── index.html          ← Strona główna
├── test.html           ← Test Big Five + wyniki + paywall
├── css/
│   └── style.css       ← Cały design system
├── js/
│   └── data.js         ← Pytania, scoring, logika, PDF
└── vercel.json         ← Konfiguracja deploymentu
```

## Deploy na Vercel (5 minut)

1. Wrzuć folder na GitHub (nowe repozytorium)
2. Wejdź na [vercel.com](https://vercel.com) → "Add New Project"
3. Połącz z GitHub, wybierz repozytorium
4. Kliknij Deploy — gotowe

## Deploy na Netlify

1. Wrzuć folder na GitHub
2. Wejdź na [netlify.com](https://netlify.com) → "Add new site"
3. Wybierz repozytorium, branch: `main`
4. Build command: (puste), Publish directory: `.`
5. Deploy

## Jak dodać własne pytania (Rafał)

Otwórz `js/data.js` i edytuj tablicę `LUMIQ.bigFiveQuestions`.

Każde pytanie ma strukturę:
```js
{
  id: 1,                    // unikalny numer
  text: "Treść pytania.",   // ← tutaj wklejasz swoje pytania
  dimension: "O",           // O/C/E/A/N
  reversed: false           // true = odpowiedź 5 obniża wynik
}
```

Wymiary:
- `O` — Otwartość na doświadczenia
- `C` — Sumienność  
- `E` — Ekstrawersja
- `A` — Ugodowość
- `N` — Neurotyczność

Pytania odwrócone (`reversed: true`) to takie, gdzie wysoka odpowiedź
oznacza niski poziom cechy, np. "Wolę rutynę" → wysoka odpowiedź = niska Otwartość.

## Jak rozbudować opisy typów

W `js/data.js`, obiekt `LUMIQ.typeDescriptions` — wpisz dłuższe opisy
dla każdego z 8 typów. Paragrafy rozdzielaj podwójnym enterem (`\n\n`).

## Następne kroki (v2)

- [ ] Podpięcie Stripe (płatności)
- [ ] Test Enneagram (po dostarczeniu pytań)
- [ ] Test 16 typów (po dostarczeniu pytań)
- [ ] Konto użytkownika (Supabase — darmowy tier)
- [ ] AI Coach (Anthropic API — Claude)
- [ ] Dashboard z historią wyników

## Tech stack

Celowo zero frameworków — czysty HTML/CSS/JS.
Działa na każdym hostingu, ładuje się w < 1s, zero zależności.

Gotowe do rozbudowy o React/Next.js gdy będzie potrzeba backendu.
