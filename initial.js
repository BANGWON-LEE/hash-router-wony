import { choicePage } from './main.js'

console.log('final')
choicePage()

// f//3번
// const pageList = function () {
//   const pageArr = []
//   console.log('RRRR', pageArr)
//   return {
//     get: function () {
//       console.log('get', pageArr)
//       return pageArr
//     },
//     set: function (page) {
//       console.log('3', page)
//       // if (page !== undefined) {
//       console.log('set', page)
//       pageArr.push(page)
//       console.log('paarrr', pageArr)
//       // return pageObj
//       // }
//     },
//   }
// }

// const pagesInfo = pageList()

// // console.log('getAAA', getPage)

// //6번
// function resultPage(resultPage) {
//   console.log('5')
//   const target = document.querySelector('#root')
//   target.innerHTML = resultPage.page
// }

// //5번
// function choicePage() {
//   console.log('4')

//   const pageObj = pagesInfo.get()
//   console.log('paaa', pageObj)
//   const path = location.hash.substring(1) || '/'

//   const page = pageObj.find(el => {
//     return el.path === path
//   })

//   resultPage(page)
// }

// //2번
// export function registerRoute(path, page) {
//   console.log('2', path, page)
//   // const pages = pageList()
//   // const pageList = choicePageList()
//   // console.log('fefefe', path, page)
//   //4번
//   pagesInfo.set({ path: path, page: page })
// }

// // console.log('pageList', pageList.getPageList())

// //7번
// window.addEventListener('hashchange', choicePage)
// // window.addEventListener('DOMContentLoaded', choicePage)
// console.log('0')
