import PocketBase from 'pocketbase';
const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_API_URL);

pb.autoCancellation(false);

export default pb;
