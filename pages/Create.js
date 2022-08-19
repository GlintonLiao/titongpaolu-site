import swr from 'swr';

const fetcher = (url) => fetch(url).then(res => res.json()).then(data => data);

export default function Create() {
  const { data, error } = swr('/api/create-page', fetcher)
  return
}