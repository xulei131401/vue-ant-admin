import mitt, { Emitter } from "mitt";
import type { Events } from '@/business/utils/emitter/type'

const emitter: Emitter<Events> = mitt<Events>();

export default emitter;
