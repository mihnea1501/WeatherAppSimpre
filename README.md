# PROIECT CLOUD COMPUTING- Weather App

## Introducere

Transferul de stat reprezentativ (REST) este un stil arhitectonic software care definește un set de constrângeri care trebuie utilizate pentru crearea serviciilor Web. Serviciile web care se conformează stilului arhitectural REST, numit RESTful Web services, asigură interoperabilitatea între sistemele informatice de pe Internet. Serviciile web RESTful permit sistemelor solicitante să acceseze și să manipuleze reprezentările textuale ale resurselor Web, folosind un set uniform și predefinit de operații apatride. 

## Descriere problema

Zilnic mii de persoane de pe intregul glob se confrunta cu probleme legate de vestimentatie. Astfel, persoanele isi achizitioneaza haine de doua ori mai mult fata de acum cinci ani, potrivit Institutului National de Statistica. Fenomenul este foarte dăunător, deoarece nu suferă doar bugetele de familie, ci şi mediul. Potrivit unui studiu, la fiecare tonă de haine refolosite emisiile de dioxid de carbon scad cu 3.6 tone. In acest sens Industria textilă a ajuns a doua în topul poluării, după cea petrolieră. 
Cu siguranta unul dintre factorii decizionali atunci cand ne alegem hainele il reprezinta si vremea de afara. Aplicatia Weather App vine astfel in sprijinul utilizatorilor de a le afisa temperatura din locatia in care acestia se afla si, in plus, o mica descriere referitoare la vremea de acasa.

## OpenWeather API: 

API-ul este unul REST care ofera vremea pentru peste 200000 de orase de pe glob. Vremea este updatata frecvent pe baza a peste 40000 de statii de vreme.
Informatiile sunt disponibile in 3 formate: JSON, XML si HTML. De asemenea, se poate apela după numele orașului sau numele orașului, codul de stat și de țară. In acest sene, API-ul răspunde cu o listă de rezultate care se potrivesc unui cuvânt de căutare.

 ### API call: 
api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
api.openweathermap.org/data/2.5/weather?q={city name},{state}&appid={your api key}
api.openweathermap.org/data/2.5/weather?q={city name},{state},{country code}&appid={your api  key}

### Parametrii:

Numele orasului, statul si codul tarii separate prin virgula ca in exemplele de mai sus. In plus, pentru codul tarii trebuie folosit codurile ISO 3166. 
API-ul de asemenea nu functioneaza doar in limba engleza. In acest caz, raspunsul API-ul o sa fie tot in limba in care request-ul s-a facut daca orasul exista in lista de peste 200000 de orase.

![](https://user-images.githubusercontent.com/43813156/81852789-411e6280-9564-11ea-9ecb-8ab11b28501a.PNG)

## SMS API

Ca si in cazul API-ul de vreme si acesta este tot unul REST, care trimite SMS-uri de pe numarul de telefon disponibil in contul de Nexmo.
Pentru a se trimite SMS-ul droit se va face POST unde endpoint-ul va fi https://rest.nexmo.com/sms/:format.
De asemenea, se utilizeaza un parametru path “format” care este utilizat pentru a decide formatul raspunsului. Acesta poate sa aiba doua valori: json sau xml.
In plus, in body request-ului avem nevoie obligatoriu de api_key, api_secret, from, to si text. Pe langa aceste chei se pot adauga si alte chei precum  type care indica tipul mesajul care poate sa fie text, binary, wappush, unicode, vcal or vcard.

