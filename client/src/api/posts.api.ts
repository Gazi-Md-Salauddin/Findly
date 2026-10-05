const API_URL = process.env.NEXT_PUBLIC_SERVER_URL;

// For GET post
export const getPosts = async () => {
  const response = await fetch(`${API_URL}/api/posts`);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

// For create post
export const createpost = async (reportData: unknown) => {
  
  const response = await fetch(
    `${API_URL}/api/posts`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(reportData),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to create report");
  }

  return response.json();
}

// For Update post
export const updatePost = async (id: string, data: unknown) => {
  const response = await fetch(`${API_URL}/api/posts/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to update post");
  }

  return response.json();
};


// For delete post
export const deletePost = async (id: string) => {
  const response = await fetch(`${API_URL}/api/posts/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete post");
  }

  return response.json();
};