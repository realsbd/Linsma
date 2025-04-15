"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useState } from "react"
import { LoadingDots } from "@/components/ui/loading-dots"

export const FormInput = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error,
  className,
  inputClassName,
}: {
  label?: string
  type?: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  required?: boolean
  error?: string
  className?: string
  inputClassName?: string
}) => {
  const [focused, setFocused] = useState(false)

  return (
    <motion.div className={cn("space-y-1", className)} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
      {label && (
        <label
          htmlFor={name}
          className={cn(
            "text-sm font-medium transition-colors duration-200",
            error ? "text-red-500" : focused ? "text-[#003763]" : "text-gray-700",
          )}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={cn(
            "w-full rounded-md border px-3 py-2 text-sm transition-all duration-200",
            error
              ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:border-[#003763] focus:ring-[#003763]",
            inputClassName,
          )}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${name}-error` : undefined}
        />
        {error && (
          <motion.p
            id={`${name}-error`}
            className="mt-1 text-xs text-red-500"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {error}
          </motion.p>
        )}
      </div>
    </motion.div>
  )
}

export const FormSelect = ({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  required = false,
  error,
  className,
  selectClassName,
}: {
  label?: string
  name: string
  value: string
  onChange: (value: string) => void
  options: { value: string; label: string }[]
  placeholder?: string
  required?: boolean
  error?: string
  className?: string
  selectClassName?: string
}) => {
  const [focused, setFocused] = useState(false)

  return (
    <motion.div className={cn("space-y-1", className)} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
      {label && (
        <label
          htmlFor={name}
          className={cn(
            "text-sm font-medium transition-colors duration-200",
            error ? "text-red-500" : focused ? "text-[#003763]" : "text-gray-700",
          )}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={cn(
            "w-full rounded-md border px-3 py-2 text-sm transition-all duration-200 appearance-none",
            error
              ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:border-[#003763] focus:ring-[#003763]",
            selectClassName,
          )}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${name}-error` : undefined}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {error && (
          <motion.p
            id={`${name}-error`}
            className="mt-1 text-xs text-red-500"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {error}
          </motion.p>
        )}
      </div>
    </motion.div>
  )
}

export const FormTextarea = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error,
  rows = 4,
  className,
  textareaClassName,
}: {
  label?: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  required?: boolean
  error?: string
  rows?: number
  className?: string
  textareaClassName?: string
}) => {
  const [focused, setFocused] = useState(false)

  return (
    <motion.div className={cn("space-y-1", className)} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
      {label && (
        <label
          htmlFor={name}
          className={cn(
            "text-sm font-medium transition-colors duration-200",
            error ? "text-red-500" : focused ? "text-[#003763]" : "text-gray-700",
          )}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={rows}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={cn(
            "w-full rounded-md border px-3 py-2 text-sm transition-all duration-200",
            error
              ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:border-[#003763] focus:ring-[#003763]",
            textareaClassName,
          )}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${name}-error` : undefined}
        />
        {error && (
          <motion.p
            id={`${name}-error`}
            className="mt-1 text-xs text-red-500"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {error}
          </motion.p>
        )}
      </div>
    </motion.div>
  )
}

export const SubmitButton = ({
  children,
  isSubmitting,
  isSubmitted,
  className,
}: {
  children: React.ReactNode
  isSubmitting?: boolean
  isSubmitted?: boolean
  className?: string
}) => {
  return (
    <motion.button
      type="submit"
      disabled={isSubmitting || isSubmitted}
      className={cn(
        "flex w-full items-center justify-center rounded-md bg-[#003763] px-4 py-2 text-white transition-all duration-300 hover:bg-[#002a4a] disabled:cursor-not-allowed disabled:opacity-70",
        className,
      )}
      whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.03 }}
      whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.97 }}
    >
      {isSubmitting ? (
        <span className="flex items-center">
          <LoadingDots className="mr-2" />
          Processing...
        </span>
      ) : isSubmitted ? (
        <span className="flex items-center">
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          Submitted!
        </span>
      ) : (
        children
      )}
    </motion.button>
  )
}
