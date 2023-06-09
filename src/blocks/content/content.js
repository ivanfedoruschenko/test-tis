const contentList = document.querySelector(".content__list")
const buttonList = contentList.querySelectorAll('.content__list-element')
const map = document.querySelector(".content__map")
const japanMap = new URL("./maps/japan.png", import.meta.url)
const koreaMap = new URL("./maps/korea.png", import.meta.url)
const chinaMap = new URL("./maps/china.png", import.meta.url)
const malaysiaMap = new URL("./maps/malaysia.png", import.meta.url)
const taiwanMap = new URL("./maps/taiwan.png", import.meta.url)
const indonesiaMap = new URL("./maps/indonesia.png", import.meta.url)
const vietnamMap = new URL("./maps/vietnam.png", import.meta.url)
const indiaMap = new URL("./maps/india.png", import.meta.url)
const turkeyMap = new URL("./maps/turkey.png", import.meta.url)
const usaMap = new URL("./maps/usa.png", import.meta.url)
const canadaMap = new URL("./maps/canada.png", import.meta.url)
const africaMap = new URL("./maps/africa.png", import.meta.url)
const uaeMap = new URL("./maps/uae.png", import.meta.url)
const europeMap = new URL("./maps/europe.png", import.meta.url)
const chileMap = new URL("./maps/chile.png", import.meta.url)
const cambodgaMap = new URL("./maps/cambodga.png", import.meta.url)
const brasilMap = new URL("./maps/brasil.png", import.meta.url)
const startMap = new URL("./maps/start-map.png", import.meta.url)

const btnArr = Array.from(buttonList)

const maps = [
  {name: "japan", link: japanMap},
  {name: "korea", link: koreaMap},
  {name: "china", link: chinaMap},
  {name: "malaysia", link: malaysiaMap},
  {name: "taiwan", link: taiwanMap},
  {name: "indonesia", link: indonesiaMap},
  {name: "vietnam", link: vietnamMap},
  {name: "india", link: indiaMap},
  {name: "turkey", link: turkeyMap},
  {name: "usa", link: usaMap},
  {name: "canada", link: canadaMap},
  {name: "africa", link: africaMap},
  {name: "uae", link: uaeMap},
  {name: "europe", link: europeMap},
  {name: "chile", link: chileMap},
  {name: "cambodga", link: cambodgaMap},
  {name: "brasil", link: brasilMap}]

const btnEnter = (e) =>{
  const currentMap = e.currentTarget.id
  const newMap = maps.find(function (element) {
   if(element.name === currentMap){
     return element
   }
  })
  map.src = newMap.link
  }
  const btnEscape = () =>{
    map.src = startMap
  }

btnArr.forEach((element) =>{
  element.addEventListener("mouseenter",btnEnter);
  element.addEventListener("mouseleave",btnEscape)

})
