import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import { PageShell } from '../../components/PageShell.jsx'

const loginSchema = z.object({
  email: z.email('Enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(loginSchema) })

  async function onSubmit(values) {
    // TODO: POST /auth/login, then load the session from the server.
    console.info('Login submitted', values.email)
  }

  return (
    <PageShell
      title="Sign in"
      description="Authentication endpoints are not connected yet. Form validation is ready for them."
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-sm space-y-4 rounded-2xl border border-stone-200 bg-white p-6"
      >
        <div>
          <label htmlFor="email" className="text-sm font-medium text-stone-800">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register('email')}
            className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm outline-none focus:border-stone-900"
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password" className="text-sm font-medium text-stone-800">
            Password
          </label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            {...register('password')}
            className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm outline-none focus:border-stone-900"
          />
          {errors.password && (
            <p className="mt-1 text-xs text-red-600">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stone-700 disabled:opacity-60"
        >
          Sign in
        </button>

        <p className="text-center text-sm text-stone-600">
          New here?{' '}
          <Link to="/register" className="font-medium text-stone-900 underline-offset-4 hover:underline">
            Create an account
          </Link>
        </p>
      </form>
    </PageShell>
  )
}
