//components\EditProductForm.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditProductForm({ 
  id,
   name, 
   price, 
   project, 
   imprementation, 
   email, 
   mobile, 
   budget, 
   year, 
   evaluation, 
   stregth, 
   weak, 
   development, 
   suggestion 
  }) {
  const [newName, setNewTitle] = useState(name);
  const [newPrice, setNewPrice] = useState(price);
  const [newProject, setNewProject] = useState(project);
  const [newImprementation, setNewImprementation] = useState(imprementation);
  const [newEmail, setNewEmail] = useState(Email);
  const [newBudget, setNewBudget] = useState(budget);
  const [newMobile, setNewMobile] = useState(mobile);
  const [newYear, setNewYear] = useState(year);
  const [newEvaluation, setNewEvaluation] = useState(evaluation);
  const [newStregth, setNewStregth] = useState(stregth);
  const [newWeak, setNewWeak] = useState(weak);
  const [newDevelopment, setNewDevelopment] = useState(development);
  const [newSuggestion, setNewSuggestion] = useState(suggestion);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newName, newProject, newPrice, newImprementation, newEmail , newBudget, newMobile, newYear, newEvaluation, newStregth, newWeak, newDevelopment, newSuggestion}),
      });

      if (!res.ok) {
        throw new Error("Failed to update Product");
      }

      router.refresh();
      router.push("/products");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="font-bold py-10 text-2xl">Update Product</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          value={newName}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />

        <input
          onChange={(e) => setNewProject(e.target.value)}
          value={newImage}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewImprementation(e.target.value)}
          value={newImage}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewEmail(e.target.value)}
          value={newImage}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewBudget(e.target.value)}
          value={newImage}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewMobile(e.target.value)}
          value={newImage}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewYear(e.target.value)}
          value={newImage}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewEvaluation(e.target.value)}
          value={newImage}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewStregth(e.target.value)}
          value={newImage}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewWeak(e.target.value)}
          value={newImage}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewDevelopment(e.target.value)}
          value={newImage}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewSuggestion(e.target.value)}
          value={newImage}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewPrice(e.target.value)}
          value={newPrice}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewCategory(e.target.value)}
          value={newCategory}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />

        <button className="btn btn-primary w-full max-w-xs">
          Update Product
        </button>
      </form>
    </>
  );
}
