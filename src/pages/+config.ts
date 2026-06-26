import vikeReact from 'vike-react/config'

export default {
  extends: [vikeReact],
  clientRouting: true,
  prerender: true, // <--- THIS tells Vike to generate static index.html files!
}