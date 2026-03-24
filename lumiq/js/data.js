// ── LUMIQ · dane i logika testów ──────────────────────────────────────────

const LUMIQ = {};

// ── BIG FIVE — pytania ────────────────────────────────────────────────────
// Każde pytanie: { id, text, dimension, reversed }
// reversed: true = odpowiedź 5 obniża wynik wymiaru
// Rafał: tutaj wklejasz swoje pytania, zmieniając pola "text"

LUMIQ.bigFiveQuestions = [
  // OTWARTOŚĆ
  { id:1,  text:"Lubię próbować nowych rzeczy i wychodzić poza utarte schematy.",              dimension:"O", reversed:false },
  { id:2,  text:"Często zanurzam się w świecie wyobraźni i fantazji.",                         dimension:"O", reversed:false },
  { id:3,  text:"Cenię tradycję i sprawdzone rozwiązania bardziej niż eksperymenty.",           dimension:"O", reversed:true  },
  { id:4,  text:"Fascynują mnie pytania filozoficzne i abstrakcyjne idee.",                    dimension:"O", reversed:false },
  { id:5,  text:"Mam szerokie zainteresowania i chętnie poznaję nowe dziedziny.",              dimension:"O", reversed:false },
  { id:6,  text:"Wolę to, co znane — nowe doświadczenia bywają dla mnie stresujące.",          dimension:"O", reversed:true  },
  { id:7,  text:"Sztuka, muzyka i literatura dostarczają mi głębokich przeżyć.",               dimension:"O", reversed:false },
  { id:8,  text:"Rutyna i przewidywalność dają mi poczucie bezpieczeństwa.",                   dimension:"O", reversed:true  },

  // SUMIENNOŚĆ
  { id:9,  text:"Zawsze kończę to, co zaczynam, nawet gdy zadanie staje się trudne.",          dimension:"C", reversed:false },
  { id:10, text:"Lubię mieć w życiu porządek — zaplanowane zadania i jasne priorytety.",       dimension:"C", reversed:false },
  { id:11, text:"Bywa, że odkładam ważne zadania na ostatnią chwilę.",                         dimension:"C", reversed:true  },
  { id:12, text:"Dotrzymuję terminów i słowa danego innym.",                                   dimension:"C", reversed:false },
  { id:13, text:"Pracuję systematycznie — krok po kroku, zgodnie z planem.",                   dimension:"C", reversed:false },
  { id:14, text:"Niedbale wykonane zadanie sprawia mi dyskomfort.",                            dimension:"C", reversed:false },
  { id:15, text:"Zdarza mi się zapominać o obowiązkach lub gubić ważne rzeczy.",               dimension:"C", reversed:true  },
  { id:16, text:"Potrafię długo skupiać się na jednym zadaniu bez rozpraszania.",              dimension:"C", reversed:false },

  // EKSTRAWERSJA
  { id:17, text:"Czuję się naładowany energią po spędzeniu czasu z dużą grupą ludzi.",         dimension:"E", reversed:false },
  { id:18, text:"Łatwo nawiązuję rozmowy z nieznajomymi.",                                    dimension:"E", reversed:false },
  { id:19, text:"Wolę spokojne, kameralne spotkania niż głośne imprezy.",                     dimension:"E", reversed:true  },
  { id:20, text:"Jestem osobą towarzyską i otwarcie wyrażam swoje emocje.",                   dimension:"E", reversed:false },
  { id:21, text:"Po intensywnym kontakcie z ludźmi potrzebuję czasu dla siebie.",              dimension:"E", reversed:true  },
  { id:22, text:"W grupie często przejmuję inicjatywę i prowadzę rozmowę.",                   dimension:"E", reversed:false },
  { id:23, text:"Praca w samotności jest dla mnie bardziej komfortowa niż praca zespołowa.",   dimension:"E", reversed:true  },
  { id:24, text:"Lubię być w centrum uwagi i chętnie zabieram głos publicznie.",              dimension:"E", reversed:false },

  // UGODOWOŚĆ
  { id:25, text:"Zależy mi na tym, żeby wszyscy czuli się dobrze — staram się unikać konfliktów.", dimension:"A", reversed:false },
  { id:26, text:"Chętnie pomagam innym, nawet kosztem własnego czasu.",                       dimension:"A", reversed:false },
  { id:27, text:"Potrafię twardo bronić swojego zdania, nawet gdy inni są przeciw.",          dimension:"A", reversed:true  },
  { id:28, text:"Ufam ludziom i zakładam, że mają dobre intencje.",                          dimension:"A", reversed:false },
  { id:29, text:"Bywa, że moje potrzeby stawiam wyżej niż potrzeby innych.",                 dimension:"A", reversed:true  },
  { id:30, text:"Jestem empatyczny — rozumiem uczucia innych i reaguję na nie.",              dimension:"A", reversed:false },
  { id:31, text:"Rywalizacja motywuje mnie bardziej niż współpraca.",                        dimension:"A", reversed:true  },
  { id:32, text:"Trudno mi odmawiać prośbom innych ludzi.",                                  dimension:"A", reversed:false },

  // NEUROTYCZNOŚĆ
  { id:33, text:"Często martwię się o przyszłość, nawet gdy nie ma wyraźnego powodu.",        dimension:"N", reversed:false },
  { id:34, text:"Jestem odporny na stres — trudne sytuacje nie wyprowadzają mnie z równowagi.", dimension:"N", reversed:true  },
  { id:35, text:"Moje nastroje potrafią zmieniać się szybko i bez wyraźnej przyczyny.",       dimension:"N", reversed:false },
  { id:36, text:"Rzadko czuję się przytłoczony lub zestresowany.",                           dimension:"N", reversed:true  },
  { id:37, text:"Krytyka ze strony innych dotyka mnie głęboko i długo o niej myślę.",        dimension:"N", reversed:false },
  { id:38, text:"W obliczu wyzwań zachowuję spokój i myślę racjonalnie.",                    dimension:"N", reversed:true  },
  { id:39, text:"Często odczuwam niepokój lub napięcie bez konkretnej przyczyny.",            dimension:"N", reversed:false },
  { id:40, text:"Szybko dochodzę do siebie po porażkach i rozczarowaniach.",                 dimension:"N", reversed:true  },
];

// ── OPISY WYNIKÓW ─────────────────────────────────────────────────────────

LUMIQ.dimensionMeta = {
  O: { name:"Otwartość",    full:"Otwartość na doświadczenia" },
  C: { name:"Sumienność",   full:"Sumienność" },
  E: { name:"Ekstrawersja", full:"Ekstrawersja" },
  A: { name:"Ugodowość",    full:"Ugodowość" },
  N: { name:"Neurotyczność",full:"Neurotyczność" },
};

// Opisy poziomów dla każdego wymiaru
// Rafał: tutaj możesz rozbudować opisy — im bogatsze, tym lepszy raport
LUMIQ.dimensionDescriptions = {
  O: {
    high: "Masz wysoką otwartość na doświadczenia — cechuje Cię ciekawość intelektualna, wyobraźnia i gotowość na nowe. Sprawdzasz się w środowiskach wymagających kreatywności i adaptacji do zmian.",
    mid:  "Twoja otwartość jest umiarkowana — cenisz zarówno nowe doświadczenia, jak i sprawdzone rozwiązania. Dobrze funkcjonujesz w środowiskach balansujących innowację z porządkiem.",
    low:  "Masz niską otwartość — cenisz stabilność, tradycję i konkret. Jesteś skuteczny w środowiskach wymagających precyzji i zgodności z ustalonymi procedurami.",
  },
  C: {
    high: "Jesteś bardzo sumienny — zorganizowany, niezawodny i ukierunkowany na cel. Inni mogą na Ciebie liczyć. Sprawdzasz się w rolach wymagających planowania i wysokiej jakości wykonania.",
    mid:  "Twoja sumienność jest umiarkowana — potrafisz być zdyscyplinowany gdy tego wymaga sytuacja, ale nie narzucasz sobie przesadnej struktury.",
    low:  "Masz niższą sumienność — jesteś elastyczny i spontaniczny. Lepiej radzisz sobie w dynamicznych, mniej ustrukturyzowanych środowiskach.",
  },
  E: {
    high: "Jesteś wyraźnym ekstrawertykiem — czerpiesz energię z kontaktów społecznych, łatwo nawiązujesz relacje i czujesz się dobrze w centrum uwagi.",
    mid:  "Jesteś ambiwertykiem — komfortowo czujesz się zarówno w towarzystwie, jak i samotnie. Dopasujesz się do różnych środowisk pracy.",
    low:  "Jesteś introwertykiem — Twoim źródłem energii jest przestrzeń i spokój. Pracujesz głębiej i skuteczniej w ciszy, bez ciągłych interakcji.",
  },
  A: {
    high: "Masz wysoką ugodowość — jesteś empatyczny, współpracujący i nastawiony na harmonię w relacjach. Cenisz dobro grupy i rzadko szukasz konfliktów.",
    mid:  "Twoja ugodowość jest zrównoważona — potrafisz współpracować i być asertywny w zależności od sytuacji.",
    low:  "Masz niższą ugodowość — jesteś asertywny, kierujesz się własnym zdaniem i nie boisz się konfrontacji gdy uważasz to za konieczne.",
  },
  N: {
    high: "Masz wyższą neurotyczność — reagujesz silnie emocjonalnie na stres i niepewność. To nie słabość — wiele utalentowanych osób ma ten profil. Warto budować strategie radzenia sobie ze stresem.",
    mid:  "Twoja stabilność emocjonalna jest umiarkowana — radzisz sobie ze stresem, choć bywają sytuacje które Cię przeciążają.",
    low:  "Masz niską neurotyczność — jesteś emocjonalnie stabilny i odporny na stres. Trudne sytuacje traktujesz jako wyzwania, nie zagrożenia.",
  },
};

// ── TYPY OSOBOWOŚCI na podstawie kombinacji wyników ───────────────────────
// Uproszczony mapping (pełna wersja może być rozbudowana)
LUMIQ.getPersonalityType = function(scores) {
  const { O, C, E, A, N } = scores;
  const hi = v => v >= 65;
  const lo = v => v < 45;

  if (hi(O) && lo(E) && hi(C))
    return { code:"INTJ-like", name:"Strategiczny Introwertyk", aka:"Analityk i planista", traits:["Analityczny","Niezależny","Strategiczny","Dociekliwy"] };
  if (hi(O) && hi(E) && hi(A))
    return { code:"ENFP-like", name:"Kreatywny Wizjoner", aka:"Inspirator i pomysłodawca", traits:["Entuzjastyczny","Kreatywny","Empatyczny","Spontaniczny"] };
  if (hi(C) && lo(E) && lo(N))
    return { code:"ISTJ-like", name:"Sumienny Pragmatyk", aka:"Strażnik standardów", traits:["Niezawodny","Precyzyjny","Systematyczny","Odpowiedzialny"] };
  if (hi(A) && hi(E) && lo(N))
    return { code:"ESFJ-like", name:"Opiekuńczy Lider", aka:"Budowniczy relacji", traits:["Ciepły","Towarzyski","Troskliwy","Lojalny"] };
  if (hi(O) && hi(E) && lo(A))
    return { code:"ENTP-like", name:"Innowator", aka:"Debater i poszukiwacz", traits:["Dociekliwy","Śmiały","Pomysłowy","Bezpośredni"] };
  if (lo(E) && hi(A) && lo(N))
    return { code:"INFJ-like", name:"Empatyczny Obserwator", aka:"Cichy idealist", traits:["Wrażliwy","Intuicyjny","Głęboki","Zaangażowany"] };
  if (hi(C) && hi(E) && lo(A))
    return { code:"ESTJ-like", name:"Zdecydowany Realizator", aka:"Egzekutor i organizator", traits:["Zdecydowany","Zorganizowany","Praktyczny","Skuteczny"] };
  // Default
  return { code:"MIXED", name:"Profil Mieszany", aka:"Zrównoważona osobowość", traits:["Elastyczny","Zrównoważony","Adaptacyjny","Wielowymiarowy"] };
};

// Pełny opis typu dla raportu
LUMIQ.typeDescriptions = {
  "INTJ-like": "Jesteś osobą niezależną, analityczną i zorientowaną na długoterminowe cele. Doskonale radzisz sobie z rozwiązywaniem złożonych problemów — tam gdzie inni widzą chaos, Ty widzisz struktury i wzorce. Preferujesz pracę autonomiczną i cenisz kompetencje ponad powierzchownymi konwenansami społecznymi.\n\nTwoja wysoka Otwartość w połączeniu z niską Ekstrawersją tworzy ciekawe połączenie: masz bogaty świat wewnętrzny pełen pomysłów i idei, ale nie odczuwasz potrzeby ich głośnego prezentowania. Pracujesz najlepiej kiedy masz czas i przestrzeń na głębsze przemyślenie problemu.",
  "ENFP-like": "Jesteś osobą pełną energii, pomysłów i autentycznej ciekawości świata. Łatwo nawiązujesz relacje i inspirujesz innych swoim entuzjazmem. Masz dar dostrzegania potencjału tam, gdzie inni go nie widzą.\n\nTwoja połączona wysoka Otwartość i Ekstrawersja sprawia, że najlepiej funkcjonujesz w środowiskach, które dają Ci wolność eksperymentowania i kontakt z ludźmi. Rutyna i ścisłe procedury mogą Cię szybko nużyć.",
  "ISTJ-like": "Jesteś osobą godną zaufania, precyzyjną i niezwykle systematyczną. Tam gdzie inni improwizują, Ty przychodzisz przygotowany. Twoja sumienność i spokój są siłą, na której inni mogą polegać.\n\nCenisz jasne struktury i sprawdzone metody. Praca w ciszy i skupieniu daje Ci najlepsze rezultaty. Jesteś typem, który robi to, co mówi — i mówi tylko to, co może zrobić.",
  "ESFJ-like": "Jesteś osobą zorientowaną na ludzi i relacje. Budujesz silne więzi, pamiętasz o innych i tworzysz atmosferę, w której wszyscy czują się zaproszeni. Twoja empatia i ciepło są Twoją największą siłą.\n\nNajlepiej funkcjonujesz w harmonijnych środowiskach, gdzie możesz pomagać i wspierać. Konflikty i negatywna atmosfera mocno Cię obciążają.",
  "ENTP-like": "Jesteś urodzonym innowatorem — kwestionujesz status quo, szukasz nowych rozwiązań i czerpiesz energię z intelektualnych wyzwań. Debata i dyskusja to dla Ciebie przyjemność, nie stres.\n\nMasz talent do dostrzegania nieoczywistych połączeń między ideami. Środowiska zbyt konserwatywne lub proceduralne szybko Cię frustrują — potrzebujesz przestrzeni na kreatywność.",
  "INFJ-like": "Jesteś osobą o rzadkim połączeniu głębokiej wrażliwości i silnych przekonań. Rozumiesz innych na poziomie, który często ich zaskakuje. Masz wewnętrzną wizję tego, jak rzeczy powinny wyglądać.\n\nPotrzebujesz czasu i przestrzeni do refleksji. Masowe, powierzchowne interakcje szybko Cię wyczerpują. Najlepiej funkcjonujesz gdy Twoja praca ma głębszy sens.",
  "ESTJ-like": "Jesteś urodzonym realizatorem — widzisz cel, tworzysz plan i konsekwentnie do niego dążysz. Masz naturalną skłonność do organizowania rzeczy i ludzi wokół siebie.\n\nCenisz efektywność, jasność i odpowiedzialność. Praca z osobami niezorganizowanymi lub nieterminowymi bywa dla Ciebie prawdziwym wyzwaniem.",
  "MIXED": "Twój profil to zrównoważona mieszanka cech, która daje Ci dużą elastyczność. Nie ma jednego dominującego wzorca — adaptujesz się do różnych sytuacji i środowisk.\n\nTo rzadka i wartościowa cecha. Możesz odnaleźć się w wielu rolach zawodowych i dobrze funkcjonować zarówno w pracy zespołowej, jak i samodzielnej.",
};

// ── SCORING ───────────────────────────────────────────────────────────────
LUMIQ.calculateScores = function(answers) {
  // answers = { questionId: value (1-5) }
  const raw = { O:[], C:[], E:[], A:[], N:[] };

  LUMIQ.bigFiveQuestions.forEach(q => {
    const val = answers[q.id];
    if (val === undefined) return;
    const score = q.reversed ? (6 - val) : val;
    raw[q.dimension].push(score);
  });

  const scores = {};
  Object.keys(raw).forEach(dim => {
    const arr = raw[dim];
    if (!arr.length) { scores[dim] = 50; return; }
    const avg = arr.reduce((a,b)=>a+b,0) / arr.length;
    // Normalizacja: 1-5 → 0-100
    scores[dim] = Math.round(((avg - 1) / 4) * 100);
  });

  return scores;
};

LUMIQ.getDimensionLevel = function(score) {
  if (score >= 65) return 'high';
  if (score >= 40) return 'mid';
  return 'low';
};

// ── PDF GENERATION ────────────────────────────────────────────────────────
LUMIQ.generatePDF = function(scores, personalityType) {
  // Tworzymy prosty HTML do druku jako PDF przez window.print()
  const dim = LUMIQ.dimensionMeta;
  const descs = LUMIQ.dimensionDescriptions;
  const typeDesc = LUMIQ.typeDescriptions[personalityType.code] || LUMIQ.typeDescriptions["MIXED"];
  const date = new Date().toLocaleDateString('pl-PL', { day:'numeric', month:'long', year:'numeric' });

  const barsHtml = Object.entries(dim).map(([key, d]) => {
    const score = scores[key];
    return `
      <div style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:5px;font-family:'DM Sans',sans-serif">
          <span style="color:#5A5870">${d.full}</span>
          <span style="font-weight:500;color:#534AB7">${score}%</span>
        </div>
        <div style="height:5px;background:#EEEDFE;border-radius:3px;overflow:hidden">
          <div style="width:${score}%;height:100%;background:#7F77DD;border-radius:3px"></div>
        </div>
      </div>`;
  }).join('');

  const html = `<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="UTF-8">
<title>Lumiq — Raport osobowości</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet">
<style>
  @page { size: A4; margin: 0; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'DM Sans', sans-serif; background: #fff; color: #1C1B22; }
  .page { width: 210mm; min-height: 297mm; padding: 0; }
  .cover { background: #26215C; padding: 48px 48px 40px; }
  .cover-brand { font-size: 18px; font-weight: 500; color: #CECBF6; letter-spacing: -0.02em; margin-bottom: 40px; }
  .cover-title { font-family: 'DM Serif Display', serif; font-size: 40px; color: #EEEDFE; line-height: 1.1; margin-bottom: 8px; }
  .cover-sub { font-size: 14px; color: #7F77DD; margin-bottom: 0; }
  .content { padding: 40px 48px; }
  .section { margin-bottom: 32px; padding-bottom: 32px; border-bottom: 0.5px solid #E4E2F0; }
  .section:last-child { border-bottom: none; }
  .section-label { font-size: 10px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.08em; color: #9896A8; margin-bottom: 14px; }
  .type-row { display: flex; gap: 14px; margin-bottom: 0; }
  .type-badge { width: 64px; height: 64px; background: #534AB7; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 500; color: #fff; letter-spacing: -0.02em; flex-shrink: 0; }
  .type-name { font-size: 17px; font-weight: 500; margin-bottom: 3px; letter-spacing: -0.02em; }
  .type-aka { font-size: 12px; color: #534AB7; font-weight: 500; margin-bottom: 8px; }
  .type-desc { font-size: 12px; color: #5A5870; line-height: 1.7; }
  .desc-block { background: #F8F6F1; border-radius: 10px; padding: 18px; }
  .desc-block p { font-size: 12px; color: #5A5870; line-height: 1.75; margin-bottom: 12px; }
  .desc-block p:last-child { margin-bottom: 0; }
  .traits { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 12px; }
  .trait { font-size: 10px; padding: 3px 10px; background: #fff; border: 0.5px solid #E4E2F0; border-radius: 20px; color: #5A5870; }
  .locked { position: relative; }
  .locked-overlay { position: absolute; inset: 0; background: rgba(248,246,241,0.85); border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 6px; }
  .locked-label { font-size: 12px; font-weight: 500; color: #3C3489; }
  .locked-btn { font-size: 11px; padding: 5px 14px; background: #534AB7; color: #fff; border-radius: 6px; }
  .blurred { filter: blur(4px); pointer-events: none; }
  .footer-pdf { padding: 20px 48px; border-top: 0.5px solid #E4E2F0; display: flex; justify-content: space-between; align-items: center; }
  .footer-pdf span { font-size: 11px; color: #9896A8; }
</style>
</head>
<body>
<div class="page">
  <div class="cover">
    <div class="cover-brand">lumiq</div>
    <div class="cover-title">Raport<br>osobowości</div>
    <div class="cover-sub">${date} · wersja bezpłatna</div>
  </div>
  <div class="content">
    <div class="section">
      <div class="section-label">Twój typ osobowości</div>
      <div class="type-row">
        <div class="type-badge">${personalityType.code.replace('-like','').substring(0,4)}</div>
        <div>
          <div class="type-name">${personalityType.name}</div>
          <div class="type-aka">${personalityType.aka}</div>
          <div class="type-desc">${personalityType.traits.join(' · ')}</div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-label">Big Five — wyniki szczegółowe</div>
      ${barsHtml}
    </div>

    <div class="section">
      <div class="section-label">Opis Twojego profilu</div>
      <div class="desc-block">
        ${typeDesc.split('\n\n').map(p => `<p>${p}</p>`).join('')}
        <div class="traits">${personalityType.traits.map(t=>`<span class="trait">${t}</span>`).join('')}</div>
      </div>
    </div>

    <div class="section locked">
      <div class="section-label">Analiza zawodowa i rekomendacje kariery</div>
      <div class="blurred">
        <div style="height:12px;background:#E4E2F0;border-radius:3px;margin-bottom:8px;width:85%"></div>
        <div style="height:12px;background:#E4E2F0;border-radius:3px;margin-bottom:8px;width:70%"></div>
        <div style="height:12px;background:#E4E2F0;border-radius:3px;margin-bottom:20px;width:90%"></div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
          <div style="height:48px;background:#E4E2F0;border-radius:8px"></div>
          <div style="height:48px;background:#E4E2F0;border-radius:8px"></div>
          <div style="height:48px;background:#E4E2F0;border-radius:8px"></div>
          <div style="height:48px;background:#E4E2F0;border-radius:8px"></div>
        </div>
      </div>
      <div class="locked-overlay">
        <div class="locked-label">Dostępne w wersji Premium</div>
        <div class="locked-btn">Odblokuj za 39 zł — lumiq.pl</div>
      </div>
    </div>
  </div>
  <div class="footer-pdf">
    <span>Wygenerowano przez Lumiq · lumiq.pl</span>
    <span>Raport bezpłatny · © ${new Date().getFullYear()} Lumiq</span>
  </div>
</div>
</body>
</html>`;

  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const win = window.open(url, '_blank');
  if (win) {
    win.addEventListener('load', () => {
      setTimeout(() => win.print(), 500);
    });
  }
};

// Eksport globalny
window.LUMIQ = LUMIQ;
