import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import { PageShell } from '../../components/PageShell.jsx'

const registerSchema = z
  .object({
    name: z.string().min(2, 'Name is required'),
    email: z.email('Enter a valid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

const fields = [
  { name: 'name', label: 'Full name', type: 'text', autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  { name: 'password', label: 'Password', type: 'password', autoComplete: 'new-password' },
  {
    name: 'confirmPassword',
    label: 'Confirm password',
    type: 'password',
    autoComplete: 'new-password',
  },
]

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(registerSchema) })

  async function onSubmit(values) {
    // TODO: POST /auth/register.
    console.info('Register submitted', values.email)
  }

  return (
    <PageShell
      title="Create account"
      description="Registration endpoints are not connected yet. Form validation is ready for them."
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-sm space-y-4 rounded-2xl border border-stone-200 bg-white p-6"
      >
        {fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="text-sm font-medium text-stone-800">
              {field.label}
            </label>
            <input
              id={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              {...register(field.name)}
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm outline-none focus:border-stone-900"
            />
            {errors[field.name] && (
              <p className="mt-1 text-xs text-red-600">{errors[field.name].message}</p>
            )}
          </div>
        ))}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stone-700 disabled:opacity-60"
        >
          Create account
        </button>

        <p className="text-center text-sm text-stone-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-stone-900 underline-offset-4 hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </PageShell>
  )
}
