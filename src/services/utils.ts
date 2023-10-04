export const getHeaders = () => ({
  "Content-Type" : "application/json",
  Accept: "application/json",
});

export const handleQuery = async (res: Response) => {
  if (res.status !== 200) {
    const errorMessage: string = `There was an error performing the action cause : ${res.status}`;
    throw new Error(errorMessage);
  }
  const body = await res.json();
  return body;
};