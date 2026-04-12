import { createContext, useState, useEffect } from "react";
import { supabase } from "../data/supabasClient";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  // --- ADD THESE FUNCTIONS BACK ---
  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data.user;
  };

  const signup = async (email, password, fullName) => {
    const { data, error } = await supabase.auth.signUp({ 
      email, password, options: { data: { full_name: fullName } } 
    });
    if (error) throw error;
    return data.user;
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };
  // --------------------------------

  const fetchUserRole = async (userId) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', userId)
        .single();
      if (data) setRole(data.role);
    } catch (err) {
      console.error("Error fetching role:", err);
    }
  };

  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          setUser(session.user);
          await fetchUserRole(session.user.id);
        }
      } catch (err) {
        console.error("Auth Session Error:", err);
      }
      setLoading(false);
    };

    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchUserRole(session.user.id);
      } else {
        setRole(null);
      }
    });

    return () => authListener.subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, role, login, signup, logout, loading }}>
      { children}
    </AuthContext.Provider>
  );
};