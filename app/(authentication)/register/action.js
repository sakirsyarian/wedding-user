import toast from "react-hot-toast";

export async function fetchLogin(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const formJson = Object.fromEntries(formData.entries());

  const res = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formJson),
  });

  const user = await res.json();
  if (res.status === 401) {
    throw { name: "Unauthorized", message: user.message };
  }
  if (res.status === 403) {
    throw { name: "Forbidden", message: user.message };
  }

  toast.success(user.message);
  await new Promise((resolve) => setTimeout(resolve, 2000));
}

export async function errorLogin(error) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (error.name === "Unauthorized") {
    return toast.error(error.message);
  }
  if (error.name === "Forbidden") {
    return toast.error(error.message);
  }

  return toast.error(error.message);
}
