## 03 - Components - Deep Dive

#### Table of contents:
1. Virtual DOM
   1. virtual representation of the UI, **kept in the memory**
   2. синхронизира вДОМ с ДОМ, ползвайки РеактДОМ
   3. вДОМ == реакт елементи (обекти)
   4. Реакт си следи разликите във вДОМ-а
      1. на промяна, **diffing algorithm** is applied
      2. само **нужните** **части** ще са ъпдейтнати в браузъра 
      3. РеактДОМ се грижи за ПОРЕДИЦАТА от операции, ние пишем Реакт, той знае какво да прави. (document . ??, ко каза ко, не и в Реакта :)
      4. Компонент връща обект (реакт елемент) > създаваме вДОМ с реакт елементи > РеактДОМ променя ДОМ с разликите от вДОМ.
      5. component > react element (obj) > creates vDOM from react els. > updates DOM via ReactDOM (optimally)
   
2. List & keys
   1. map()
   2. demo for keys
      - static movies array
      - render movies[0]
      - state updater function (pass it to setMovies) to create new reference
      - старите филми === равни ли са на новите по референция? Ако да, няма да рендя :) -- Реакт.
      - .slice() [...arr] - клонираме старата референция с нова
      - ***key оптимизира броя на промени, правейки имането на ключ по-евтина операция, ака задължителна, това разбрах.***


3. Component lifecycle
4. ***useEffect*** hook
5. CSS modules
6. Fetching data


Golden tidbits:
- по-лесно *евтино* е да правим промени във виртуалния дом, вместо в реалния
- винаги връщаме нова референция!
- когато СТЕЙТА се промени - ТОГАВА се пре-рендерира неговия компонент! (всичко прави наново)
- динамично елементи като рендерираме, ключове - задължително!