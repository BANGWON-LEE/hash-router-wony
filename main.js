import { another } from './pages/another.js'
import { home } from './pages/home.js'
import { notFound } from './pages/notFound.js'
import { sub } from './pages/sub.js'

function choicePage(pageObj) {
  const target = document.querySelector('#root')
  const hashPath = location.hash.substring(1)

  const viewPage = pageObj.find(el => {
    return el.key === hashPath
  })

  const resultPage = viewPage !== undefined ? viewPage.view : notFound()

  target.innerHTML = resultPage
}

function addPage() {
  // 클로저를 사용하여 페이지가 추가될 때 배열에 저장될 수 있도록 진행
  const pageObj = []
  return function (page) {
    if (page !== undefined) {
      pageObj.push(page)
    }
    return pageObj
  }
}

function movePage(id) {
  const hashId = id === '' ? 'home' : id
  location.hash = hashId
}

function viewPage() {
  // 라우트를 추가한다 생각하는 개념의 함수
  const pageObj = addPage()

  pageObj({ key: 'home', view: home() })
  pageObj({ key: 'sub', view: sub() })
  pageObj({ key: 'another', view: another() })

  return choicePage(pageObj())
}

function initialPage() {
  //초기 시작 함수.
  const target = document.querySelector('#root')
  target.innerHTML = home()
}

window.addEventListener('DOMContentLoaded', initialPage)
window.addEventListener('click', event => movePage(event.target.id))
window.addEventListener('hashchange', viewPage)
