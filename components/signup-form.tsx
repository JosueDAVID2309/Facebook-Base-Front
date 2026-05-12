import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Nombres</FieldLabel>
              <Input id="nombre" type="text" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="name">Apellidos</FieldLabel>
              <Input id="apellido" type="text" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Correo</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Contraseña</FieldLabel>
              <Input id="password" type="password" required />
              <FieldDescription>
                Debe tener 8 caracteres almenos.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="confirm-password">
                Confirmar Contraseña
              </FieldLabel>
              <Input id="confirm-password" type="password" required />
              <FieldDescription>Por favor confirma tu contraseña</FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit">Registrarse</Button>
                <Button variant="outline" type="button">
                  Registrate con Google
                </Button>
                <FieldDescription className="px-6 text-center">
                  ¿Ya tienes una cuenta? <Link href="/login">Registrate</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
