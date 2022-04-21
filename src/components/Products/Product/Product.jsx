import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  CardActionArea,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";

const Product = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          sx={{}}
          image={product.image.url}
          title={product.name}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom component="div">
            {product.name}
          </Typography>
          <Typography variant="h5" gutterBottom component="div">
            {product.price.formatted_with_symbol}
          </Typography>

          <Typography
            dangerouslySetInnerHTML={{ __html: product.description }}
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: 10 }}
          />
        </CardContent>
        <CardActions
          disableSpacing
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <IconButton aria-label="Add to Cart">
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default Product;
