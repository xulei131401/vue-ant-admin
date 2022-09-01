import Koa from 'Koa'
import cors from 'koa2-cors';
import koaStatic from 'koa-static';
// import body from 'koa-body';
import path from 'path';
import router from './router/index';

const PORT = 9528;
const app = new Koa()
// 中间件
app.use(cors());
app.use(koaStatic(path.join(__dirname)));
app.use(router.routes());

app.listen(PORT, () => {
	console.log(`Test 服务启动成功: http://localhost:${PORT}`);
})
