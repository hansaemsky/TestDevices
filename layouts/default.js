import Woowahan from 'woowahan';
import template from './default.hbs';

export default Woowahan.View.create('DefaultLayout', {
    template,
    tagName : 'div',
    className : 'default popup',
    events: {
     'click .contents' : 'sayHello'
    },
    sayHello(){
      console.log('Hello!');
    }
});
