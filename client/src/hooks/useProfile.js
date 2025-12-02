import { useState, useEffect, useCallback } from 'react';
import useApi from './useApi';
import useAuth from './useAuth';

// Gère la recupération de l'utilisateur (prénom/nom)
// Retourne : { firstName, lastName, loading, error, fetchProfile }
export default function useProfile() {
  const { apiFetch } = useApi();
  const { isAuthenticated } = useAuth();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
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
        setFirstName(data.body.firstName);
        setLastName(data.body.lastName);
      } else {
        setError('Erreur lors de la récupération du profil');
      }
    } catch (err) {
      setError('Erreur réseau');
    } finally {
      setLoading(false);
    }
  }, [apiFetch, isAuthenticated]);

  // Mettre à jour le profil utilisateur via l'API
  // TODO...

  // Récupère le profil au chargement
  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return { firstName, lastName, loading, error, fetchProfile };
}
