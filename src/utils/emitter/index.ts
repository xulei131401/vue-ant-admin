import mitt, { Emitter } from 'mitt'
import type { Events } from './type'

const emitter: Emitter<Events> = mitt<Events>()

export default emitter
