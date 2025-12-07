import { useState, useEffect, useCallback } from 'react';
import useApi from './useApi';
import useAuth from './useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile } from '../store/authSlice';

// Gère la recupération et la mise à jour de l'utilisateur (prénom/nom)
// Retourne : { firstName, lastName, loading, error, fetchProfile, updateProfile }
export default function useProfile() {
  const dispatch = useDispatch();

  const { apiFetch } = useApi();
  const { isAuthenticated } = useAuth();

  const { firstName, lastName } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Récupèrer le profil utilisateur depuis l'API
  const fetchProfile = useCallback(async () => {
    if (!isAuthenticated) return;

    setLoading(true);
    setError(null);

    try {
      const { ok, data } = await apiFetch('/user/profile', { method: 'POST' });
      if (ok && data.body) {
        dispatch(setProfile({ firstName: data.body.firstName, lastName: data.body.lastName }));
      } else {
        setError('Erreur lors de la récupération du profil');
      }
    } catch (err) {
      setError('Erreur réseau');
    } finally {
      setLoading(false);
    }
  }, [apiFetch, isAuthenticated, dispatch]);

  // Mettre à jour le profil utilisateur via l'API
  const updateProfile = useCallback(async ({ firstName: f, lastName: l }) => {
    if (!isAuthenticated) return { ok: false };

    setLoading(true);
    setError(null);

    try {
      const { ok, data } = await apiFetch('/user/profile', {
        method: 'PUT',
        body: JSON.stringify({ firstName: f, lastName: l }),
      });

      if (ok && data.body) {
        dispatch(setProfile({ firstName: data.body.firstName, lastName: data.body.lastName }));
        return { ok: true, data };
      }

      setError('Erreur lors de la mise à jour du profil');
      return { ok: false, data };
    }
    catch (err) {
      setError('Erreur réseau');
      return { ok: false };
    }
    finally {
      setLoading(false);
    }
  }, [apiFetch, isAuthenticated, dispatch]);

  // Récupère le profil au chargement
  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return { firstName, lastName, loading, error, fetchProfile, updateProfile };
}
