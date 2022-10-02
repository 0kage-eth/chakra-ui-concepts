import { useForm } from "react-hook-form"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from "@chakra-ui/react"

export const SampleForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = (values: any) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(JSON.stringify(values))
        resolve("")
      }, 3000)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name ? true : false}>
        <FormLabel htmlFor="name">First Name</FormLabel>
        <Input
          id="name"
          placeholder="name"
          {...register("name", {
            required: "Name is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <FormErrorMessage>{errors.name && "Error detected"}</FormErrorMessage>
        <Button
          mt={4}
          colorScheme="blue"
          type="submit"
          isLoading={isSubmitting}>
          Submit
        </Button>
      </FormControl>
    </form>
  )
}
