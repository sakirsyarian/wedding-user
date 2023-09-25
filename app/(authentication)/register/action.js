import toast from "react-hot-toast";

export async function fetchLogin(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const formJson = Object.fromEntries(formData.entries());

  const res = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formJson),
  });

  const user = await res.json();
  if (res.status === 400) {
    throw { name: "Bad Request", message: user.message };
  }
}

export async function errorLogin(error) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (error.name === "Bad Request") {
    return error.message.map((message) =>
      toast.error(message, {
        duration: 5000,
      })
    );
  }

  return toast.error(error.message);
}
