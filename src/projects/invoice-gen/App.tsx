import { useState, useRef } from "react";
import { FileText, Plus, Trash2, Download, EyeIcon } from "lucide-react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { Invoice, InvoiceItem, CustomerInfo } from "./types";

function InvoiceGen() {
  const iframeRef = useRef(null);
  const [pdfUrl, setPdfUrl] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [invoice, setInvoice] = useState<Invoice>({
    id: `INV-${Date.now()}`,
    date: new Date().toISOString().split("T")[0],
    customerInfo: {
      name: "",
      email: "",
      address: "",
    },
    items: [
      {
        id: "1744072740582",
        description: "",
        quantity: 1,
        price: 1,
        placeholder: "Apple",
      },
    ],
    taxRate: 10,
  });

  const addItem = () => {
    setInvoice({
      ...invoice,
      items: [
        ...invoice.items,
        {
          id: Date.now().toString(),
          description: "",
          quantity: 1,
          price: 5,
          placeholder: [
            "Cheese",
            "Banana",
            "Apple",
            "Peanut Butter",
            "Eggs",
            "Sugar",
            "Salt",
            "Milk",
            "Bread",
            "Butter",
            "Rice",
            "Pasta",
            "Flour",
            "Tomato",
            "Onion",
            "Garlic",
            "Carrot",
            "Potato",
            "Cucumber",
            "Lettuce",
            "Chicken",
            "Beef",
            "Fish",
            "Yogurt",
            "Cereal",
            "Jam",
            "Honey",
            "Tea",
            "Coffee",
            "Oil",
            "Vinegar",
            "Baking Powder",
            "Mayonnaise",
            "Ketchup",
            "Mustard",
            "Soy Sauce",
            "Chili Sauce",
            "Oats",
            "Tofu",
            "Spinach",
          ][Math.floor(Math.random() * 40)],
        },
      ],
    });
  };

  const removeItem = (id: string) => {
    setInvoice({
      ...invoice,
      items: invoice.items.filter((item) => item.id !== id),
    });
  };

  const updateItem = (
    id: string,
    field: keyof InvoiceItem,
    value: string | number
  ) => {
    setInvoice({
      ...invoice,
      items: invoice.items.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    });
  };

  const updateCustomerInfo = (field: keyof CustomerInfo, value: string) => {
    console.log(field);
    setInvoice({
      ...invoice,
      customerInfo: { ...invoice.customerInfo, [field]: value },
    });
  };

  const calculateSubtotal = () => {
    return invoice.items.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
  };

  const calculateTax = () => {
    return calculateSubtotal() * (invoice.taxRate / 100);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  const generatePDF = async (download = true) => {
    setIsGenerating(true);

    const doc = new jsPDF();

    // Add header
    doc.setFontSize(20);
    doc.setFont("", "bold");
    doc.text("INVOICE", 105, 20, { align: "center" });
    doc.setFontSize(12);
    doc.setFont("", "normal");
    doc.text(`Invoice #: ${invoice.id}`, 20, 30);
    doc.text(`Date: ${invoice.date}`, 20, 35);

    // Add customer info
    doc.text("Bill To:", 20, 45);
    doc.setFontSize(11);
    doc.setFont("", "normal");
    doc.text(invoice.customerInfo.name, 20, 50, {});
    doc.text(invoice.customerInfo.email, 20, 55);
    doc.text(invoice.customerInfo.address, 20, 60);

    // Add items table
    const tableData = invoice.items.map((item) => [
      item.description,
      item.quantity,
      `$${item.price.toFixed(2)}`,
      `$${(item.quantity * item.price).toFixed(2)}`,
    ]);

    autoTable(doc, {
      startY: 70,
      head: [["Description", "Quantity", "Price", "Amount"]],
      body: tableData,
      tableLineWidth: 0.5,
    });

    // Add totals
    const finalY = (doc as any).lastAutoTable.finalY + 5;
    doc.text(`Subtotal: $${calculateSubtotal().toFixed(2)}`, 160, finalY);
    doc.text(
      `Tax (${invoice.taxRate}%): $${calculateTax().toFixed(2)}`,
      160,
      finalY + 5
    );
    doc.text(`Total: $${calculateTotal().toFixed(2)}`, 160, finalY + 10);

    if (download === true) {
      doc.save(`invoice-${invoice.id}.pdf`);
    }

    const blob = doc.output("blob");
    const url = URL.createObjectURL(blob);
    setPdfUrl(url);

    setIsGenerating(false); // Hide loading
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-400 py-8 ">
      <div className="max-w-2xl mx-auto my-2 bg-white bg-opacity-85 shadow-2xl p-8 rounded-md border border-indigo-300">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <FileText className="h-8 w-8 text-indigo-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-800">
              Invoice Generator
            </h1>
          </div>
        </div>

        <div className="grid md:grid-cols-7 gap-6 mb-8">
          <div className="md:col-span-4">
            <h2 className="text-lg font-semibold mb-9">Customer Information</h2>
            <div className="space-y-2">
              <div>
                <input
                  placeholder="Customer Name"
                  type="text"
                  value={invoice.customerInfo.name}
                  onChange={(e) => updateCustomerInfo("name", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-sm"
                />
              </div>
              <div>
                <input
                  placeholder="Customer Email"
                  type="email"
                  value={invoice.customerInfo.email}
                  onChange={(e) => updateCustomerInfo("email", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-sm"
                />
              </div>
              <div>
                <textarea
                  placeholder="Customer Address"
                  value={invoice.customerInfo.address}
                  onChange={(e) =>
                    updateCustomerInfo("address", e.target.value)
                  }
                  rows={2}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-sm"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-3 ">
            <h2 className="text-lg font-semibold mb-3">Invoice Details</h2>
            <div className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Invoice #
                </label>
                <input
                  type="text"
                  value={invoice.id}
                  disabled
                  className="w-full px-4 py-2 border mt-1 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  value={invoice.date}
                  onChange={(e) =>
                    setInvoice({ ...invoice, date: e.target.value })
                  }
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Tax Rate (%)
                </label>
                <input
                  type="number"
                  value={invoice.taxRate}
                  onChange={(e) =>
                    setInvoice({ ...invoice, taxRate: Number(e.target.value) })
                  }
                  className="w-full px-4 py-2 border mt-1 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-2">
          <h2 className="text-lg font-semibold">Items</h2>

          <div className="space-y-1">
            <div className="grid md:grid-cols-5 grid-cols-6 gap-4 font-bold md:text-sm text-xs">
              <span className="col-span-2">Description</span>
              <span>Quantity</span>
              <span>Price</span>
              <span>Total</span>
            </div>
            {invoice.items.map((item) => (
              <div
                key={item.id}
                className="grid md:grid-cols-5 grid-cols-6  gap-4 "
              >
                <div className="col-span-2">
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) =>
                      updateItem(item.id, "description", e.target.value)
                    }
                    placeholder={item.placeholder}
                    className="w-full px-4 py-2 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-sm"
                  />
                </div>
                <div className="col-span-1">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateItem(item.id, "quantity", Number(e.target.value))
                    }
                    placeholder="Qty"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-sm"
                  />
                </div>
                <div className="col-span-1">
                  <input
                    type="number"
                    value={item.price}
                    onChange={(e) =>
                      updateItem(item.id, "price", Number(e.target.value))
                    }
                    placeholder="Price"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-sm"
                  />
                </div>
                <div className="md:col-span-1 col-span-2 grid grid-cols-2">
                  <span className=" overflow-x-auto overflow-y-hidden w-auto md:px-auto py-2 border-t border-l border-b border-gray-300 rounded-l-md text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-sm">
                    ${(item.quantity * item.price).toFixed(2)}
                  </span>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-gray-600 hover:bg-red-400 hover:border-red-600 hover:text-red-500 hover:bg-opacity-15 "
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-2  ">
          <button
            onClick={addItem}
            className="px-3 py-1 border bg-opacity-5 bg-indigo-600 border-indigo-600 text-indigo-600 text-sm rounded-md flex items-center hover:ring-2 hover:ring-indigo-500 hover:border-blue-500 transition duration-200"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Item
          </button>
        </div>
        <div className="pt-4">
          <div className="flex justify-end space-y-2">
            <div className="md:w-72 w-full">
              <div className="flex justify-between">
                <span className="font-medium">Subtotal:</span>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-b-2 border-black pb-2">
                <span className="font-medium">
                  Tax (
                  {
                    <input
                      type="number"
                      value={invoice.taxRate}
                      onChange={(e) =>
                        setInvoice({
                          ...invoice,
                          taxRate: Number(e.target.value),
                        })
                      }
                      className="w-8 py-1  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-sm"
                    />
                  }
                  %):
                </span>
                <span>${calculateTax().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold mt-2">
                <span>Total:</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
              <div className="w-full mt-2 grid grid-cols-3">
                <button
                  onClick={() => generatePDF(true)}
                  className="col-span-2 w-full px-2 py-2 rounded-l-md border-l border-t border-b bg-opacity-5 bg-indigo-600 border-indigo-600 text-indigo-600 text-sm flex items-center justify-center hover:ring-2 hover:ring-indigo-500 hover:border-blue-500 transition duration-200"
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4 mr-2 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4l5-5-5-5v4a10 10 0 100 20v-4l-5 5 5 5v-4a8 8 0 01-8-8z"
                        />
                      </svg>
                      Generating...
                    </>
                  ) : (
                    <>
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </>
                  )}
                </button>
                <button
                  onClick={() => generatePDF(false)}
                  className="col-span-1 px-2 py-2 w-full rounded-r-md border bg-opacity-5 bg-blue-600 border-blue-600 text-blue-600 text-sm  flex items-center hover:ring-2 hover:ring-indigo-500 hover:border-blue-500 transition duration-200"
                >
                  <EyeIcon className="h-4 w-4 mr-2" />
                  Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {pdfUrl && (
        <div className="max-w-2xl mx-auto bg-gray-200 my-2 rounded-lg shadow-md py-8">
          <div className="flex items-center flex-col">
            <span className="font-bold text-2xl text-center">Preview</span>
            <iframe
              ref={iframeRef}
              src={pdfUrl}
              width="100%"
              height="500px"
              className="max-w-4xl mx-auto rounded-lg p-4"
            ></iframe>
          </div>
        </div>
      )}
      <div className="bg-slate-50  bg-opacity-30 max-w-2xl min-w-2xl py-1 flex-col flex justify-center items-center mx-auto font-mono text-center border-indigo-600 border rounded-md">
        <span className=" block w-full p-0 rounded-md">
          Made by Blazt ( Aung Htet Oo )
        </span>
        <a
          target="blank_"
          href="https://toatotallyLegitPortfolioSitebyAungHtetoo.com"
          className=" border-b border-indigo-300 hover:border-b hover:border-blue-700 transition duration-200"
        >
          Check out my portfolio {`>>>`}
        </a>
      </div>
    </div>
  );
}

export default InvoiceGen;
