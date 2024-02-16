//import LoginPage from '../PageObjects/LoginPage'

describe('LoginPage', function(){
    before(function(){
        cy.fixture('loginCreds').then(function(data)
        {
            this.data=data
        })
    })

    it('loginfunction',function(){

       cy.login (this.data.email,this.data.password)
    })
})