import React, {useState} from "react";
import Headers from "./components/Header/Header";
import AboutMusikSection from "./components/AboutMusikSection/AboutMusikSection";
import ExploreByCategorySection from "./components/exploreByCategory_section/ExploreByCategorySection"
import SingersSection from "./components/SingersSection/SingersSection"
import EventScheduleSection from "./components/EventScheduleSection/EventScheduleSection";
import ChooseSection from "./components/ChooseSection/ChooseSection";
import SponsorsSection from "./components/SponsorsSection/SponsorsSection";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";
import BestShotsSection from "./components/BestShotsSection/BestShotsSection";
import ContactsSection from "./components/contacts_section/ContactsSection";


function App() {

  return (
    <div className="App">
      <Headers></Headers>
    

      <ExploreByCategorySection></ExploreByCategorySection>
      <AboutMusikSection></AboutMusikSection>
      <SingersSection></SingersSection>
      <EventScheduleSection></EventScheduleSection>
      {/*  */}
      <ChooseSection></ChooseSection>
      <SponsorsSection></SponsorsSection>
      <TestimonialSection></TestimonialSection>
      <BestShotsSection />
      <ContactsSection />
    </div>
  );
}

export default App;

/*
строчные от блочных
события в доме 
как остановить всплытия ?  тег form. submit-обновляется браузер, prefentDefault - не перезагружает 
как подключить или написать стили (3)
что делает свойство justify-content: итд
как можно объявить переменную и их видимость
что такое DOM и для чего он нужен, как происходит отрисовка? DOM - это API 
основные элементы взаимодействия с DOM 
как удалить, добавить, вставить элемент
position:
z-index
function decloration и expretion
this, контекст (bind, aplie?)
new - создание инстанс класса
xhr - через await 
атрибуты kay
map итд работа с массивами
loop 


*/