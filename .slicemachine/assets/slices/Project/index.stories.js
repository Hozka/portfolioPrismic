import MyComponent from '../../../../slices/Project';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Project'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","name":"Default","slice_type":"project","items":[{"title":[{"type":"paragraph","text":"Eiusmod deserunt ex enim eu aliqua nostrud irure qui incididunt ut tempor adipisicing. Magna officia et consequat duis non cillum sint minim fugiat pariatur ea. Ad exercitation proident proident laboris consectetur cillum duis ipsum magna quis exercitation est voluptate.","spans":[]}],"description":[{"type":"paragraph","text":"Cillum voluptate aliquip aliqua ad voluptate. Tempor quis veniam qui Lorem.","spans":[]}],"link":{"link_type":"Web","url":"https://slicemachine.dev"}},{"title":[{"type":"paragraph","text":"Enim labore minim adipisicing id enim duis consectetur ea veniam dolore Lorem aute.","spans":[]}],"description":[{"type":"paragraph","text":"Sunt duis anim culpa reprehenderit.","spans":[]}],"link":{"link_type":"Web","url":"https://slicemachine.dev"}},{"title":[{"type":"paragraph","text":"Dolor sunt do amet deserunt in aliqua id incididunt. Commodo mollit ad ea Lorem ipsum voluptate et veniam duis sunt dolor cupidatat non cillum.","spans":[]}],"description":[{"type":"paragraph","text":"Enim consectetur cillum commodo anim reprehenderit consectetur cillum occaecat pariatur exercitation dolore mollit Lorem sit anim. Ipsum consequat anim laboris. Aliqua mollit fugiat fugiat commodo aliquip ut ut adipisicing.","spans":[]}],"link":{"link_type":"Web","url":"http://twitter.com"}},{"title":[{"type":"paragraph","text":"Mollit sunt tempor adipisicing in reprehenderit voluptate voluptate eiusmod irure voluptate aute do. Cupidatat quis commodo mollit sint.","spans":[]}],"description":[{"type":"paragraph","text":"Deserunt aute tempor pariatur id esse eu quis proident pariatur officia ipsum. Consectetur mollit voluptate velit enim sit ad non nisi est ullamco elit deserunt tempor.","spans":[]}],"link":{"link_type":"Web","url":"http://twitter.com"}},{"title":[{"type":"paragraph","text":"Ipsum qui ut culpa ipsum amet eiusmod mollit cupidatat deserunt est nostrud deserunt pariatur. Esse irure labore cupidatat quis nostrud eu cillum. Eu deserunt Lorem ea.","spans":[]}],"description":[{"type":"paragraph","text":"Sit eu in cupidatat mollit officia eu esse occaecat sunt.","spans":[]}],"link":{"link_type":"Web","url":"http://google.com"}},{"title":[{"type":"paragraph","text":"Sint quis cillum esse anim excepteur.","spans":[]}],"description":[{"type":"paragraph","text":"Irure laborum qui in irure. Do ut ea id occaecat laboris quis qui voluptate laboris culpa enim voluptate est velit nisi.","spans":[]}],"link":{"link_type":"Web","url":"https://slicemachine.dev"}}],"primary":{},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
