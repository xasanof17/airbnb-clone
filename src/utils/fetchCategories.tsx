const fetchCategories = async () => {
  const res = await fetch('http://localhost:3000/api/hello');
  const data = await res.json();
  return data;
};

export default fetchCategories;
