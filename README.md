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

#### Response
{
    "coord": {
        "lon": -0.13,
        "lat": 51.51
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 284.27,
        "feels_like": 278.44,
        "temp_min": 283.71,
        "temp_max": 284.82,
        "pressure": 1017,
        "humidity": 40
    },
    "visibility": 10000,
    "wind": {
        "speed": 5.1,
        "deg": 60
    },
    "clouds": {
        "all": 97
    },
    "dt": 1589389356,
    "sys": {
        "type": 1,
        "id": 1414,
        "country": "GB",
        "sunrise": 1589343070,
        "sunset": 1589398962
    },
    "timezone": 3600,
    "id": 2643743,
    "name": "London",
    "cod": 200
}

![](https://user-images.githubusercontent.com/43813156/81852792-411e6280-9564-11ea-9c3e-06cc18eb74e1.PNG)

#### Response
{
    "coord": {
        "lon": 26.11,
        "lat": 44.43
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 293.84,
        "feels_like": 292.48,
        "temp_min": 292.04,
        "temp_max": 294.82,
        "pressure": 1018,
        "humidity": 46
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.5,
        "deg": 50
    },
    "clouds": {
        "all": 0
    },
    "dt": 1589389914,
    "sys": {
        "type": 1,
        "id": 6911,
        "country": "RO",
        "sunrise": 1589338216,
        "sunset": 1589391221
    },
    "timezone": 10800,
    "id": 683506,
    "name": "Bucharest",
    "cod": 200
}

![](https://user-images.githubusercontent.com/43813156/81852795-411e6280-9564-11ea-8dc3-99bc8674e58f.PNG)

#### Resonse
{
    "coord": {
        "lon": -74.01,
        "lat": 40.71
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 287.8,
        "feels_like": 282.3,
        "temp_min": 286.15,
        "temp_max": 289.15,
        "pressure": 1026,
        "humidity": 25
    },
    "visibility": 16093,
    "wind": {
        "speed": 4.1,
        "deg": 260
    },
    "clouds": {
        "all": 1
    },
    "dt": 1589390283,
    "sys": {
        "type": 1,
        "id": 4610,
        "country": "US",
        "sunrise": 1589362829,
        "sunset": 1589414665
    },
    "timezone": -14400,
    "id": 5128581,
    "name": "New York",
    "cod": 200
}

## SMS API

Ca si in cazul API-ul de vreme si acesta este tot unul REST, care trimite SMS-uri de pe numarul de telefon disponibil in contul de Nexmo.
Pentru a se trimite SMS-ul droit se va face POST unde endpoint-ul va fi https://rest.nexmo.com/sms/:format.
De asemenea, se utilizeaza un parametru path “format” care este utilizat pentru a decide formatul raspunsului. Acesta poate sa aiba doua valori: json sau xml.
In plus, in body request-ului avem nevoie obligatoriu de api_key, api_secret, from, to si text. Pe langa aceste chei se pot adauga si alte chei precum  type care indica tipul mesajul care poate sa fie text, binary, wappush, unicode, vcal or vcard.

![](https://user-images.githubusercontent.com/43813156/81852797-41b6f900-9564-11ea-9f30-7e926fe3d0af.PNG)

#### Response
{
    "message-count": "1",
    "messages": [
        {
            "to": "40749541415",
            "message-id": "13000000DADF1E59",
            "status": "0",
            "remaining-balance": "1.81880000",
            "message-price": "0.06040000",
            "network": "22610"
        }
    ]
}

![](https://user-images.githubusercontent.com/43813156/81852798-41b6f900-9564-11ea-8c02-53f388271fa9.PNG)

#### Response
{
    "message-count": "1",
    "messages": [
        {
            "to": "40749541415",
            "message-id": "15000000D92B071E",
            "status": "0",
            "remaining-balance": "1.75840000",
            "message-price": "0.06040000",
            "network": "22610"
        }
    ]
}

![](https://user-images.githubusercontent.com/43813156/81856333-51850c00-9569-11ea-8ed6-9f32d263be13.jpg)

## Autentificare și autorizare servicii utilizate

Primul API functioneaza pe baza de API Key, iar cel de-al doilea functioneaza pe baza de API Key si API Secret care se genereaza automat din aplicatie.

## Capturi ecram aplicatie

![](https://user-images.githubusercontent.com/43813156/81852800-424f8f80-9564-11ea-813a-3d0a795d5489.PNG)

![](https://user-images.githubusercontent.com/43813156/81852801-424f8f80-9564-11ea-9de6-9069c70914a6.PNG)

![](https://user-images.githubusercontent.com/43813156/81852802-42e82600-9564-11ea-8313-100910fc64cc.PNG)

![](https://user-images.githubusercontent.com/43813156/81852804-42e82600-9564-11ea-89a0-1d6b53538813.PNG)

![](https://user-images.githubusercontent.com/43813156/81852805-42e82600-9564-11ea-852c-18e2bcc94a01.PNG)
