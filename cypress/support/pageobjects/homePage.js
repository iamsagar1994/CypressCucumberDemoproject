const homePage_searchCityName = '.sc-iuDHTM.iuaBK'
const homePage_selectMetroCityList = '.sc-eNNmBn.jvVNzr'
const homePage_selectAllCityList = 'sc-jMMfwr.dJVB'
const homePage_view_hideAllCities = 'span[class=".sc-ecaExY.hJSLzQ" ]'
const homePage_currentCityName = '.sc-iGrrsa.WwYKB.ellipsis'
const homePage_searchActivities = '.sc-qrIAp.bGHskC'
const homePage_dynamicList = '.sc-cFlXAS.bNOYsR'
const homePage_personalisation_reject = '.No.thanks'

export const homePage = {
    selectNothanks() { cy.get(homePage_personalisation_reject).click({ force: true }) },
    entercityname(cityname) { cy.get(homePage_searchCityName).type(cityname) },
    viewAllCities() { cy.get(homePage_view_hideAllCities).click() },
    hideAllCities() { cy.get(homePage_view_hideAllCities).click() },
    selectMetroCity(cityname) { cy.searchListandclick(homePage_selectMetroCityList, cityname) },
    selectFromAllCities(cityname) { cy.searchListandclick(homePage_selectAllCityList, cityname) },
    verifyCurrentCityName(cityname) { cy.verifyText(homePage_currentCityName, cityname) },
    entermallname(mallname) { cy.get(homePage_searchActivities).type(mallname) },
    SelectMall(Mall) { cy.searchListandclick(homePage_dynamicList, Mall) }


} 