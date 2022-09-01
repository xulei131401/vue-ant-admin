export class Result {
	static Success(data: any) {
		return {
			code: 0,
			data: data ?? null,
		};
	}

	static Error(data: any, msg: string = "网络开小差，请重试") {
		return {
			code: 1,
			msg: msg,
			data: data ?? null,
		};
	}
}
