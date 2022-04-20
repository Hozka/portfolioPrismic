import MyComponent from '../../../../slices/TestHome';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TestHome'
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
      mock: {"variation":"default","name":"Default","slice_type":"test_home","items":[],"primary":{"title":[{"type":"heading1","text":"Monetize robust interfaces","spans":[]}],"description":[{"type":"paragraph","text":"Ullamco aliqua pariatur eu aute in labore sunt culpa.","spans":[]}],"subtitle":"reintermediate frictionless niches"},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
