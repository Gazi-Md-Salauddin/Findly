"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Check,
  ChevronDown,
  Clock,
  ImagePlus,
  MapPin,
  Package,
  Send,
  ShieldCheck,
  Trash2,
  Upload,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type ReportType = "lost" | "found" | null;

const steps = [
  {
    number: 1,
    title: "Type",
    description: "What happened?",
  },
  {
    number: 2,
    title: "Item Details",
    description: "Tell us about the item",
  },
  {
    number: 3,
    title: "Location & Date",
    description: "Where and when?",
  },
  {
    number: 4,
    title: "Photos",
    description: "Add item photos",
  },
  {
    number: 5,
    title: "Review",
    description: "Check and submit",
  },
];

export default function ReportPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    category: "",
    color: "",
    status: "",
    brand: "",
    city: "",
    area: "",
    date: "",
    time: "",
    notes: "",
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [reportType, setReportType] = useState<ReportType>("lost");
  const [images, setImages] = useState<File[]>([]);

  const router = useRouter();

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;

    if (!files) return;

    const newFiles = Array.from(files);

    setImages((prev) => [...prev, ...newFiles].slice(0, 5));
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const uploadImage = async (file: File) => {
    const data = new FormData();

    data.append("file", file);
    data.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
    );

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );

    if (!response.ok) {
      throw new Error("Image upload failed");
    }

    const result = await response.json();

    return result.secure_url;
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit function
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    try {
      // Upload images to Cloudinary
      const imageUrls: string[] = [];

      for (const image of images) {
        const url = await uploadImage(image);
        imageUrls.push(url);
      }

      const reportData = {
        title: formData.title,
        description: formData.description,
        type: reportType,
        city: formData.city,
        area: formData.area,
        date: formData.date,
        time: formData.time,
        category: formData.category,
        color: formData.color,
        brand: formData.brand,
        notes: formData.notes,
        images: imageUrls,
        status: "pending",
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts`,
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

      console.log("server url:", `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts`)

      const data = await response.json();

      console.log("Report created:", data);

      router.push("/");
    } catch (error) {
      console.error("Submit error:", error);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Page */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Report an Item
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Help the community by reporting a lost or found item.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          {/* Sidebar */}
          <aside className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="space-y-1">
              {steps.map((step) => {
                const active = currentStep === step.number;
                const completed = currentStep > step.number;

                return (
                  <div key={step.number} className="relative">
                    <div
                      className={`flex items-center gap-3 rounded-xl px-3 py-3 transition ${active
                        ? "bg-blue-50"
                        : "hover:bg-slate-50"
                        }`}
                    >
                      {/* Number */}
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${completed
                          ? "bg-blue-600 text-white"
                          : active
                            ? "bg-blue-600 text-white"
                            : "border border-slate-300 bg-white text-slate-500"
                          }`}
                      >
                        {completed ? (
                          <Check size={16} />
                        ) : (
                          step.number
                        )}
                      </div>

                      {/* Text */}
                      <div>
                        <p
                          className={`text-sm font-semibold ${active
                            ? "text-blue-700"
                            : "text-slate-700"
                            }`}
                        >
                          {step.title}
                        </p>

                        <p className="text-xs text-slate-400">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Connector */}
                    {step.number !== 5 && (
                      <div className="ml-6.75 h-3 border-l border-slate-200" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Safety */}
            <div className="mt-6 rounded-xl bg-slate-50 p-4">
              <ShieldCheck
                size={19}
                className="mb-2 text-blue-600"
              />

              <p className="text-xs font-semibold text-slate-800">
                Your privacy matters
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Your exact location and contact information will
                never be publicly displayed.
              </p>
            </div>
          </aside>

          {/* Form */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-8">
            {/* Step 1 */}
            {currentStep === 1 && (
              <StepContainer
                step="Step 1 of 5"
                title="What would you like to report?"
                description="Choose whether you lost something or found something."
              >
                <div className="grid gap-4 md:grid-cols-2">
                  {/* Lost */}
                  <button
                    onClick={() => setReportType("lost")}
                    className={`rounded-2xl border p-6 text-left transition ${reportType === "lost"
                      ? "border-red-400 bg-red-50/50 ring-2 ring-red-100"
                      : "border-slate-200 hover:border-red-300"
                      }`}
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600">
                        <Package size={24} />
                      </div>

                      <div
                        className={`h-5 w-5 rounded-full border ${reportType === "lost"
                          ? "border-red-500 bg-red-500"
                          : "border-slate-300"
                          }`}
                      >
                        {reportType === "lost" && (
                          <Check
                            size={14}
                            className="m-0.5 text-white"
                          />
                        )}
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-slate-900">
                      I Lost Something
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Report a missing item and let the community
                      help you find it.
                    </p>
                  </button>

                  {/* Found */}
                  <button
                    onClick={() => setReportType("found")}
                    className={`rounded-2xl border p-6 text-left transition ${reportType === "found"
                      ? "border-green-400 bg-green-50/50 ring-2 ring-green-100"
                      : "border-slate-200 hover:border-green-300"
                      }`}
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                        <Package size={24} />
                      </div>

                      <div
                        className={`h-5 w-5 rounded-full border ${reportType === "found"
                          ? "border-green-500 bg-green-500"
                          : "border-slate-300"
                          }`}
                      >
                        {reportType === "found" && (
                          <Check
                            size={14}
                            className="m-0.5 text-white"
                          />
                        )}
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-slate-900">
                      I Found Something
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Help return a lost item to its rightful
                      owner.
                    </p>
                  </button>
                </div>
              </StepContainer>
            )}

            {/* Step 2 */}
            {currentStep === 2 && (
              <StepContainer
                step="Step 2 of 5"
                title="Item Details"
                description="Provide as much detail as possible to help people identify the item."
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <InputField
                    label="Item Name"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g. Black Leather Wallet"
                    required
                  />

                  <SelectField
                    label="Category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    placeholder="Select a category"
                    required
                  />

                  <InputField
                    label="Color"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    placeholder="e.g. Black"
                  />

                  <InputField
                    label="Brand"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    placeholder="e.g. Samsung"
                  />

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Description
                      <span className="ml-1 text-red-500">*</span>
                    </label>

                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Describe the item in detail. Include unique features, brand, model, marks, etc."
                      className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                    />

                    <p className="mt-1 text-right text-xs text-slate-400">
                      0/500
                    </p>
                  </div>
                </div>
              </StepContainer>
            )}

            {/* Step 3 */}
            {currentStep === 3 && (
              <StepContainer
                step="Step 3 of 5"
                title="Location & Date"
                description="Tell us where and when the item was lost or found."
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <SelectCity
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Select city"
                    required
                  />

                  <SelectCity
                    label="Area"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    placeholder="Select area"
                    required
                  />

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Date
                      <span className="ml-1 text-red-500">*</span>
                    </label>

                    <div className="relative">
                      <Calendar
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="h-11 w-full rounded-xl border border-slate-200 pl-10 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Approximate Time
                    </label>

                    <div className="relative">
                      <Clock
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="h-11 w-full rounded-xl border border-slate-200 pl-10 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                      />
                    </div>
                  </div>

                  {/* Privacy location */}
                  <div className="md:col-span-2 rounded-xl border border-slate-200 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-medium text-slate-800">
                          Exact location
                        </p>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          Your exact location will not be shown
                          publicly. It can only be shared privately
                          when needed.
                        </p>
                      </div>

                      <button
                        type="button"
                        className="relative h-6 w-11 shrink-0 rounded-full bg-blue-600"
                      >
                        <span className="absolute right-1 top-1 h-4 w-4 rounded-full bg-white shadow" />
                      </button>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Additional Notes
                    </label>

                    <textarea
                      rows={4}
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Any extra details that might help..."
                      className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                    />
                  </div>
                </div>
              </StepContainer>
            )}

            {/* Step 4 */}
            {currentStep === 4 && (
              <StepContainer
                step="Step 4 of 5"
                title="Add Photos"
                description="Upload clear photos of the item. You can add up to 5 images."
              >
                <label className="flex min-h-55 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50/50 px-6 text-center transition hover:border-blue-400 hover:bg-blue-50/30">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Upload size={25} />
                  </div>

                  <p className="text-sm font-semibold text-blue-600">
                    Click to browse
                  </p>

                  <p className="mt-2 text-xs text-slate-500">
                    PNG, JPG or JPEG · Max 5 images · 5MB each
                  </p>

                  <input
                    type="file"
                    accept="image/png,image/jpeg"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>

                {/* Images */}
                {images.length > 0 && (
                  <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className="group relative aspect-square overflow-hidden rounded-xl border border-slate-200"
                      >
                        <Image
                          src={URL.createObjectURL(image)}
                          alt={`Uploaded ${index + 1}`}
                          width={20}
                          height={20}
                          className="h-full w-full object-cover"
                        />

                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-red-500 shadow-sm opacity-0 transition group-hover:opacity-100"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    ))}

                    {images.length < 5 && (
                      <label className="flex aspect-square cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-slate-300 text-slate-400 transition hover:border-blue-400 hover:text-blue-600">
                        <ImagePlus size={24} />

                        <input
                          type="file"
                          accept="image/png,image/jpeg"
                          multiple
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                )}
              </StepContainer>
            )}

            {/* Step 5 */}
            {currentStep === 5 && (
              <StepContainer
                step="Step 5 of 5"
                title="Review Your Report"
                description="Please check all the details before submitting."
              >
                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <div className="flex gap-4 p-5">
                    <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-100">
                      {images[0] ? (
                        <Image
                          src={URL.createObjectURL(images[0])}
                          alt="Item"
                          width={20}
                          height={20}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <Package
                          size={30}
                          className="text-slate-400"
                        />
                      )}
                    </div>

                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${reportType === "lost"
                            ? "bg-red-100 text-red-700"
                            : "bg-green-100 text-green-700"
                            }`}
                        >
                          {reportType === "lost"
                            ? "Lost"
                            : "Found"}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-slate-900">
                        {formData.title}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        {formData.category} · {formData.color}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-slate-200">
                    <ReviewRow
                      icon={<MapPin size={17} />}
                      label="Location"
                      value={`${formData.area}, ${formData.city}`}
                    />

                    <ReviewRow
                      icon={<Calendar size={17} />}
                      label="Date"
                      value={formData.date}
                    />

                    <ReviewRow
                      icon={<Clock size={17} />}
                      label="Time"
                      value={formData.time}
                    />

                    <ReviewRow
                      icon={<Package size={17} />}
                      label="Description"
                      value={formData.description}
                    />

                    <ReviewRow
                      icon={<ImagePlus size={17} />}
                      label="Images"
                      value={`${images.length || 0} photos`}
                    />
                  </div>
                </div>

                <div className="mt-5 rounded-xl bg-blue-50 p-4">
                  <div className="flex gap-3">
                    <ShieldCheck
                      size={20}
                      className="shrink-0 text-blue-600"
                    />

                    <div>
                      <p className="text-sm font-semibold text-blue-900">
                        Before you submit
                      </p>

                      <p className="mt-1 text-xs leading-5 text-blue-700">
                        Make sure your information is accurate.
                        Your report may be reviewed before it
                        becomes publicly visible.
                      </p>
                    </div>
                  </div>
                </div>
              </StepContainer>
            )}

            {/* Footer Buttons */}
            <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6">
              <button
                onClick={previousStep}
                disabled={currentStep === 1}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ArrowLeft size={16} />
                Back
              </button>

              {currentStep < 5 ? (
                <button
                  onClick={nextStep}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Next Step
                  <ArrowRight size={16} />
                </button>
              ) : (
                <button onClick={handleSubmit} className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
                  <Send size={17} />
                  Submit Report
                </button>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

/* ---------------- Components ---------------- */

function StepContainer({
  step,
  title,
  description,
  children,
}: {
  step: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-7">
        <p className="text-xs font-semibold text-blue-600">
          {step}
        </p>

        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
          {title}
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          {description}
        </p>
      </div>

      {children}
    </div>
  );
}

function InputField({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}

        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}

        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      <div className="relative">
        <select name={name}
          value={value}
          onChange={onChange} className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 pr-10 text-sm text-slate-500 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50">
          <option value="">{placeholder}</option>
          <option>Electronics</option>
          <option>Wallet & Accessories</option>
          <option>Documents</option>
          <option>Keys</option>
          <option>Phone</option>
          <option>Other</option>
        </select>

        <ChevronDown
          size={17}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
      </div>
    </div>
  );
}
function SelectCity({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}

        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      <div className="relative">
        <select name={name} value={value}
          onChange={onChange} className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 pr-10 text-sm text-slate-500 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50">
          <option value="">{placeholder}</option>
          <option>Dhaka</option>
          <option>Sylhet</option>
          <option>Rajshahi</option>
          <option>Khulna</option>
          <option>Chattogram</option>
          <option>Other</option>
        </select>

        <ChevronDown
          size={17}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
      </div>
    </div>
  );
}

function ReviewRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4 border-b border-slate-100 px-5 py-4 last:border-0">
      <div className="mt-0.5 text-slate-400">{icon}</div>

      <div className="min-w-0 flex-1">
        <p className="text-xs text-slate-400">{label}</p>

        <p className="mt-1 text-sm font-medium text-slate-700">
          {value}
        </p>
      </div>
    </div>
  );
}