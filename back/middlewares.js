const middlewares = {

      submitClickMiddleware : function (req, res, next) {
            const buttonSubmit = document.querySelector('buttonSubmit');
            buttonSubmit.addEventListener('click',function(event) {
                   console.log(event)
                   console.log('click')

                   next();
            })
      }, 
};


module.exports = middlewares;