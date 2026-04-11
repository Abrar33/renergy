import React, { useState, useContext } from 'react';
import { AuthContext } from "../../Context/AuthContext";
import { supabase } from "../../data/supabasClient";
import { useNavigate } from 'react-router-dom';
import { FileText, AlertTriangle, Send, Inbox, ArrowLeft } from 'lucide-react';

const NewClaim = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    warranty_id: '',
    issue_type: 'technical',
    description: '',
  });

  const submitClaim = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Inserting data into your claims table
    const { error } = await supabase.from('claims').insert([{
      user_id: user.id,
      warranty_id: formData.warranty_id,
      issue_type: formData.issue_type,
      description: formData.description,
      status: 'pending' // Default status for admin/seller review
    }]);

    if (error) {
      alert("Error submitting: " + error.message);
    } else {
      alert("Claim sent! Our support team will review it.");
      navigate("/dashboard");
    }
    setLoading(false);
  };

  return (
    <div className="p-4 md:p-12 bg-slate-50 min-h-screen">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-500 font-bold mb-6 hover:text-emerald-600">
        <ArrowLeft size={18} /> Back to Dashboard
      </button>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Form */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h2 className="text-3xl font-black mb-1">Create Support Claim</h2>
          <p className="text-slate-500 mb-8">Provide details about your solar asset issue.</p>
          
          <form onSubmit={submitClaim} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Warranty ID</label>
                <input 
                  required
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-emerald-500 outline-none"
                  placeholder="W-XXXXX"
                  onChange={(e) => setFormData({...formData, warranty_id: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Issue Category</label>
                <select 
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-emerald-500 outline-none"
                  onChange={(e) => setFormData({...formData, issue_type: e.target.value})}
                >
                  <option value="technical">Technical Failure</option>
                  <option value="physical">Physical Damage</option>
                  <option value="performance">Performance Drop</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Issue Description</label>
              <textarea 
                required
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-emerald-500 outline-none h-40"
                placeholder="Explain what is happening..."
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              />
            </div>

            <button 
              disabled={loading}
              className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-emerald-600 transition flex items-center justify-center gap-2"
            >
              {loading ? "Sending..." : <><Send size={18} /> Submit Claim</>}
            </button>
          </form>
        </div>

        {/* Right Side: Informational Card */}
        <div className="bg-emerald-600 text-white p-8 rounded-3xl">
          <Inbox size={40} className="mb-6 opacity-50" />
          <h3 className="text-xl font-black mb-4">What happens next?</h3>
          <ul className="space-y-4 text-emerald-50 text-sm font-medium">
            <li className="flex gap-2"><span>•</span> Our team reviews your claim within 24 hours.</li>
            <li className="flex gap-2"><span>•</span> An admin will update the claim status.</li>
            <li className="flex gap-2"><span>•</span> You will receive notifications via your dashboard.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewClaim;