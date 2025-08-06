import { Plus, Minus } from "lucide-react";

export default function TestIcons() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Icon Size Test</h1>
      
      <div className="space-y-2">
        <h2 className="text-lg">Using size prop only:</h2>
        <div className="flex items-center space-x-4 bg-gray-100 p-4">
          <Plus size={24} className="text-red-500" />
          <Plus size={36} className="text-red-500" />
          <Plus size={48} className="text-red-500" />
        </div>
        
        <div className="flex items-center space-x-4 bg-gray-100 p-4">
          <Minus size={24} className="text-blue-500" />
          <Minus size={36} className="text-blue-500" />
          <Minus size={48} className="text-blue-500" />
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg">Using className only:</h2>
        <div className="flex items-center space-x-4 bg-gray-100 p-4">
          <Plus className="w-6 h-6 text-green-500" />
          <Plus className="w-9 h-9 text-green-500" />
          <Plus className="w-12 h-12 text-green-500" />
        </div>
        
        <div className="flex items-center space-x-4 bg-gray-100 p-4">
          <Minus className="w-6 h-6 text-purple-500" />
          <Minus className="w-9 h-9 text-purple-500" />
          <Minus className="w-12 h-12 text-purple-500" />
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg">Using both (conflicting):</h2>
        <div className="flex items-center space-x-4 bg-gray-100 p-4">
          <Minus size={24} className="w-12 h-12 text-orange-500" />
          <Minus size={48} className="w-6 h-6 text-orange-500" />
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg">With inline styles (should work):</h2>
        <div className="flex items-center space-x-4 bg-gray-100 p-4">
          <Minus style={{ width: '36px', height: '36px' }} className="text-pink-500" />
          <Plus style={{ width: '36px', height: '36px' }} className="text-pink-500" />
        </div>
      </div>
    </div>
  );
}
