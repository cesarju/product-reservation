import { Box, Button, Grid, GridItem } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useFormik } from "formik";

export const Card = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      reseva: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box boxShadow="2xl" p="6" bg="purple.50" rounded="md" m="5" maxW="3xl">
      <Heading textAlign="center" mb="5">
        Registar producto
      </Heading>
      <form onSubmit={formik.handleSubmit}>
        <Grid
          h="200px"
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap="4"
        >
          <GridItem colSpan={4}>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Nombre"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              boxShadow="md"
            />
          </GridItem>
          <GridItem colSpan={2}>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Articulo"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              boxShadow="md"
            />
          </GridItem>
          <GridItem colSpan={2}>
            <Input
              id="email"
              name="email"
              type="text"
              placeholder="Precio bs."
              onChange={formik.handleChange}
              value={formik.values.email}
              boxShadow="md"
            />
          </GridItem>

          <GridItem colSpan={4}>
            <Input
              id="montoReserva"
              name="montoReserva"
              type="text"
              placeholder="Reserva bs."
              onChange={formik.handleChange}
              value={formik.values.reseva}
              boxShadow="md"
            />
          </GridItem>

          <GridItem colSpan={4}>
            <Button type="submit" colorScheme="purple" w="50%">
              Registrar
            </Button>
          </GridItem>
        </Grid>
      </form>
    </Box>
  );
};
