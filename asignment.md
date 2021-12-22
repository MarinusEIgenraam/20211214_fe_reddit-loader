- De applicatie bevat slechts twee pagina's: één home-pagina en één subreddit-specificatie-pagina die informatie over
  iedere subreddit weer zou kunnen geven. Hij is dus herbruikbaar. Hier gebruik je dynamic routing en dynamic params
  voor.
- Om de top 15 hottest posts op te halen, gebruik je het volgende endpoint: GET https://www.reddit.com/hot.json?limit=15
  . Je hebt geen API key nodig. Om de informatie over de subreddit r/tumblr op te halen, gebruik je het volgende API
  endpoint: GET https://www.reddit.com/r/tumblr/about.json . Je hebt geen API key nodig.
- Door op de naam van de subreddit te klikken, wordt de gebruiker doorgelinkt naar de subreddit-specificatie-pagina;
  Door op de titel van de post te klikken, wordt de gebruiker doorgelinkt naar de echte post op Reddit.com;
- Zorg dat je (kleine!) componenten maakt van elementen die vaak terugkomen in jouw applicatie. Als je componenten maken nog
  lastig vindt, doe je dit pas aan het einde.
- Iedere pagina en ieder component krijgen hun eigen CSS bestand.
- Alle aantallen (ups, comments, subscribers) geef je weer in een punt-notatie.
- Als er iets mis gaat bij het ophalen van de data, geef je een foutmelding weer op de pagina;
- Op de subreddit-specificatie pagina gebruik je het bijgevoegde SVG-icoon voor de <Back to overview -link In het tabblad wordt een eigen icoontje en titel weergegeven (bijvoorbeeld het logo van Reddit)
- Bedenk je eigen styling en layout voor deze opdracht;
- Schrijf een duidelijke README.md, waarin je in jouw eigenwoorden beschrijft:
  Wat dit project doet Welke technieken je hebt gebruikt Hoe een developer zonder verstand van frontend, dit project
  zelfstandig kan installeren en starten; © Deze opdracht is eigendom van Hogeschool NOVI