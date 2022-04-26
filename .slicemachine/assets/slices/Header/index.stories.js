import MyComponent from '../../../../slices/Header';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Header'
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
      mock: {"variation":"default","name":"Default","slice_type":"header","items":[],"primary":{"title":[{"type":"heading1","text":"Engineer proactive experiences","spans":[]}],"description":[{"type":"paragraph","text":"Qui est nulla elit anim eu tempor veniam eu proident ipsum.","spans":[]}],"imageProfil":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=900&h=500&fit=crop"},"descriptionPerson":[{"type":"paragraph","text":"Elit commodo officia aute officia. Elit aliquip duis aute reprehenderit culpa eu dolore magna. Sint commodo nisi velit proident enim ullamco aliqua occaecat amet.","spans":[]}],"linkedin":{"link_type":"Web","url":"http://google.com"},"linkgithub":{"link_type":"Web","url":"https://slicemachine.dev"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
