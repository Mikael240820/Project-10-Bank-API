import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { API_BASE_URL } from '../config/api';

// Simplifie les appels API
// Ajoute automatiquement les bons headers (Content-Type et Authorization si le token est présent)
// Retourne un objet { ok, status, data } pour faciliter le tratement des réponnses
export default function useApi() {
  const token = useSelector((state) => state.auth.token);

  const apiFetch = useCallback(async (path, options = {}) => {
    const url = `${API_BASE_URL}${path}`;
    const headers = {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    };
    if (token) headers.Authorization = `Bearer ${token}`;

    const response = await fetch(url, { ...options, headers });
    const data = await response.json();

    return {
      ok: response.ok,
      status: response.status,
      data
    };
  }, [token]);

  return { apiFetch };
}
