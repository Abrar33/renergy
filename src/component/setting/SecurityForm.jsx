const SecurityForm = () => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <div className="grid grid-cols-1 gap-6 max-w-md">
      <InputField label="Current Password" type="password" />
      <hr className="border-slate-100" />
      <InputField label="New Password" type="password" />
      <InputField label="Confirm New Password" type="password" />
    </div>

    <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-xl border border-amber-100">
      <div className="text-amber-600 font-bold text-xs">
        Note: Changing your password will log you out of all other active sessions.
      </div>
    </div>

    <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all">
      Reset Password
    </button>
  </div>
);
export default SecurityForm