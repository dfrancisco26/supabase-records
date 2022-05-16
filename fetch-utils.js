const SUPABASE_URL = 'https://edanuxzgkcleuccdeakc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkYW51eHpna2NsZXVjY2RlYWtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIzNjg3OTMsImV4cCI6MTk2Nzk0NDc5M30.HH23nUpy7jCA4AgRRgpIk8M-fwc5zqvBLuE1Muk_lps';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getRecords() {
    const resp = await client.from('records').select('*');
//    console.log(resp);
    return resp.data;
}   


export async function getOne(id) {
    const resp = await client.from('records').select().match({ id: id }).single();
//    console.log(resp);
    return resp.data;
}

//getRecords();