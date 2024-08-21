//app\addProduct\page.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [Project, setProject] = useState("");
  const [imprementation, setImprementation] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [Budget, setBudget] = useState("");
  const [year, setYear] = useState("");
  const [evaluation, setEvaluation] = useState("");
  const [weak, setWeak] = useState("");
  const [stregth, setStregth] = useState("");
  const [devalopment, setDevalopment] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !image) {
      alert("Name and image are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, image, price, category }),
      });

      if (res.ok) {
        router.push("/products");
        // router.push("/");
      } else {
        throw new Error("Failed to create a Product");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="font-bold py-10 text-2xl mx-20">Add New Product</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-10 ml-24">
  <div className="sm:col-span-3">
    <label
      htmlFor="first-name"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      ยุทธศาสตร์ชาติ
    </label>
    <div className="mt-2">
      <input
      onChange={(e) => setName(e.target.value)}
      value={name}
      className="input input-bordered input-accent w-full max-w-xs"
      type="text"
      placeholder="Product Name"
    />
    </div>
  </div>
  <div className="sm:col-span-3">
    <label
      htmlFor="first-name"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      โครงงาน
    </label>
    <div className="mt-2">
    <input
          onChange={(e) => setProject(e.target.value)}
          value={Project}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
          placeholder="/images/1.jpg"
          defaultValue="/images/1.jpg"
        />
    </div>
  </div>
  <div className="sm:col-span-3">
    <label
      htmlFor="first-name"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      หน่วยงานที่นำนโยบายไปปฏิบัติ
    </label>
    <div className="mt-2">
    <input
          onChange={(e) => setImprementation(e.target.value)}
          value={imprementation}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
          placeholder="หน่วยงานที่นำนโยบายไปปฏิบัติ"
        />
    </div>
  </div>
  <div className="sm:col-span-3">
    <label
      htmlFor="last-name"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      อีเมล
    </label>
    <div className="mt-2">
    <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
          placeholder="อีเมล"
        />
      
        
    </div>
  </div>
  <div className="sm:col-span-3">
    <label
      htmlFor="last-name"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      โทรศัพท์
    </label>
    <div className="mt-2">
    <input
          onChange={(e) => setMobile(e.target.value)}
          value={mobile}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
          placeholder="โทรศัพท์"
        />
      
        
    </div>
  </div>
  <div className="sm:col-span-3">
    <label
      htmlFor="last-name"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
    งบประมาณ(ล้านบาท)  
    </label>
    <div className="mt-2">
    <input
          onChange={(e) => setBudget(e.target.value)}
          value={Budget}
          className="input input-bordered input-accent w-full max-w-xs"
          type="number"
          placeholder="งบประมาณ"
        />
      
    </div>
  </div>
  <div className="sm:col-span-3">
    <label
      htmlFor="last-name"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      ปีงบประมาณ
    </label>
    <div className="mt-2">
    <input
          onChange={(e) => setYear(e.target.value)}
          value={year}
          className="input input-bordered input-accent w-full max-w-xs"
          type="number"
          placeholder="ปีงบประมาณ"
        />
    </div>
  </div>
  <div className="sm:col-span-3">
    <label
      htmlFor="last-name"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      ผลประเมิน
    </label>
    <div className="mt-2">
    <input
          onChange={(e) => setEvaluation(e.target.value)}
          value={evaluation}
          className="input input-bordered input-accent w-full max-w-xs"
          type="float"
          placeholder="ผลการประเมิน"
        />
    </div>
  </div>
  <div className="sm:col-span-3">
    <label
      htmlFor="last-name"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      จุดอ่อน
    </label>
    <div className="mt-2">
    <input
          onChange={(e) => setWeak(e.target.value)}
          value={weak}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
          placeholder="จุดอ่อน"
        />
    </div>
  </div>
  <div className="sm:col-span-3">
    <label
      htmlFor="last-name"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      จุดเเข็ง
    </label>
    <div className="mt-2">
    <input
          onChange={(e) => setStregth(e.target.value)}
          value={stregth}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
          placeholder="จุดเเข็ง"
        />
    </div>
  </div>
  <div className="sm:col-span-3">
    <label
      htmlFor="last-name"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      เเนวทางเสริมจุดเเข็ง
    </label>
    <div className="mt-2">
    <input
          onChange={(e) => setDevalopment(e.target.value)}
          value={devalopment}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
          placeholder="เเนวทางเสริมจุดเเข็ง"
        />
    </div>
  </div>
  <div className="sm:col-span-3">
    <label
      htmlFor="last-name"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      ข้อเสนอเเนะ
    </label>
    <div className="mt-2">
    <input
          onChange={(e) => setSuggestion(e.target.value)}
          value={suggestion}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
          placeholder="ข้อเสนอเเนะ"
        />
    </div>
  </div>
</div>
        <div className="flex justify-center items-center mt-10">
        <button
         type="submit" 
         className="btn btn-primary w-full max-w-xs mx-20 flex justify-center "
      >
          Add Product
        </button>
        </div>
      </form>
    </>
  );
}
