import 'dotenv/config';
import { Client } from '@line/bot-sdk';

const client = new Client({ channelAccessToken: process.env.LINE_TOKEN! });

async function main() {
  await client.broadcast({
    type: 'text',
    text: '👋 テスト送信です！ これが届けば Broadcast 成功'
  });
  console.log('✅ Broadcast sent');
}

main().catch(console.error);