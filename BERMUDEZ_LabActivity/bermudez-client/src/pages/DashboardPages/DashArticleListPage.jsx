import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  TextField,
  MenuItem,
  Chip,
  Stack,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import SearchIcon from "@mui/icons-material/Search";
import API from "../../constants";

export default function DashArticleListPage() {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    image: "",
    content: "",
    isPublished: true,
  });

  const loadArticles = async () => {
    try {
      const response = await fetch(`${API.HOST}/articles`);

      if (!response.ok) {
        throw new Error("Failed to fetch articles");
      }

      const data = await response.json();

      const formattedArticles = data.map((article) => ({
        id: article._id,
        name: article.name,
        slug: article.name,
        title: article.title,
        image: article.image,
        content: article.content,
        paragraphs: Array.isArray(article.content) ? article.content.length : 1,
        preview: Array.isArray(article.content)
          ? article.content[0]
          : article.content,
        isActive: article.isPublished,
      }));

      setArticles(formattedArticles);
    } catch (error) {
      console.error("Error loading articles:", error);
    }
  };

  useEffect(() => {
    loadArticles();
  }, []);

  const filteredArticles = articles.filter((article) => {
    const search = searchQuery.toLowerCase();

    const matchesSearch =
      searchQuery === "" ||
      article.id.toLowerCase().includes(search) ||
      article.title.toLowerCase().includes(search) ||
      article.slug.toLowerCase().includes(search);

    const matchesStatus =
      statusFilter === "" || String(article.isActive) === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleOpenModal = () => {
    setEditingId(null);
    setFormData({
      name: "",
      title: "",
      image: "",
      content: "",
      isPublished: true,
    });
    setOpenModal(true);
  };

  const handleOpenEditModal = (article) => {
    setEditingId(article.id);

    setFormData({
      name: article.name || article.slug,
      title: article.title,
      image: article.image || "",
      content: Array.isArray(article.content)
        ? article.content.join("\n")
        : article.content || "",
      isPublished: article.isActive,
    });

    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setEditingId(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveArticle = async () => {
    try {
      setLoading(true);

      const payload = {
        name: formData.name,
        title: formData.title,
        image: formData.image,
        content: formData.content
          .split("\n")
          .map((paragraph) => paragraph.trim())
          .filter((paragraph) => paragraph !== ""),
        isPublished: formData.isPublished,
      };

      const url = editingId
        ? `${API.HOST}/articles/${editingId}`
        : `${API.HOST}/articles`;

      const method = editingId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to save article");
      }

      setOpenModal(false);
      setEditingId(null);
      await loadArticles();
    } catch (error) {
      console.error("Error saving article:", error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleStatus = async (id) => {
    const article = articles.find((item) => item.id === id);

    if (!article) return;

    try {
      const response = await fetch(`${API.HOST}/articles/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: article.name,
          title: article.title,
          image: article.image,
          content: article.content,
          isPublished: !article.isActive,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update article status");
      }

      await loadArticles();
    } catch (error) {
      console.error("Error updating article:", error);
      alert(error.message);
    }
  };

  const columns = [
    {
      field: "id",
      headerName: "Database ID",
      width: 220,
    },
    {
      field: "slug",
      headerName: "Article Name / Slug",
      flex: 1,
      minWidth: 190,
    },
    {
      field: "title",
      headerName: "Article Title",
      flex: 1,
      minWidth: 190,
    },
    {
      field: "paragraphs",
      headerName: "Paragraph Count",
      width: 160,
      type: "number",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "preview",
      headerName: "Article Preview",
      flex: 2,
      minWidth: 320,
      renderCell: ({ row }) => (
        <Typography
          sx={{
            fontSize: "0.875rem",
            color: "#52525b",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {row.preview && row.preview.length > 100
            ? `${row.preview.substring(0, 100)}...`
            : row.preview}
        </Typography>
      ),
    },
    {
      field: "status",
      headerName: "Publish Status",
      width: 150,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row }) => (
        <Chip
          size="small"
          label={row.isActive ? "Active" : "Inactive"}
          sx={{
            backgroundColor: row.isActive ? "#f0fdf4" : "#fffbeb",
            color: row.isActive ? "#166534" : "#b45309",
            border: `1px solid ${row.isActive ? "#bbf7d0" : "#fde68a"}`,
            fontWeight: "bold",
            borderRadius: "0.5rem",
          }}
        />
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 210,
      sortable: false,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row }) => (
        <Stack direction="row" spacing={1} sx={{ py: 0.5 }}>
          <Button
            size="small"
            onClick={() => handleOpenEditModal(row)}
            sx={{
              color: "#D4AF37",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#fefce8" },
            }}
          >
            Edit
          </Button>

          <Button
            size="small"
            variant="contained"
            onClick={() => toggleStatus(row.id)}
            sx={{
              backgroundColor: row.isActive ? "#e4e4e7" : "#003366",
              color: row.isActive ? "#52525b" : "#ffffff",
              borderRadius: "0.5rem",
              boxShadow: "none",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: row.isActive ? "#d4d4d8" : "#002244",
                boxShadow: "none",
              },
            }}
          >
            {row.isActive ? "Disable" : "Activate"}
          </Button>
        </Stack>
      ),
    },
  ];

  return (
    <Box sx={{ p: 1 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 900,
            color: "#003366",
            letterSpacing: "-0.02em",
          }}
        >
          Articles
        </Typography>

        <Button
          variant="contained"
          onClick={handleOpenModal}
          sx={{
            backgroundColor: "#FFD700",
            color: "#003366",
            boxShadow: "0 4px 10px rgba(255,215,0,0.3)",
            fontWeight: "bold",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#E5C100",
              boxShadow: "0 6px 15px rgba(255,215,0,0.4)",
            },
          }}
        >
          Add Article
        </Button>
      </Box>

      <Card
        sx={{
          border: "1px solid #e0e0e0",
          boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
          borderRadius: "8px",
        }}
        elevation={0}
      >
        <CardContent sx={{ p: 3 }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            sx={{ mb: 3 }}
          >
            <TextField
              placeholder="Search by ID, article name, or title"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#003366" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                flex: 1,
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  "&.Mui-focused fieldset": {
                    borderColor: "#003366",
                    borderWidth: "2px",
                  },
                },
              }}
            />

            <TextField
              select
              label="Status Filter"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              size="small"
              sx={{
                minWidth: 180,
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  "&.Mui-focused fieldset": {
                    borderColor: "#003366",
                    borderWidth: "2px",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": { color: "#003366" },
              }}
            >
              <MenuItem value="">All Statuses</MenuItem>
              <MenuItem value="true">Active</MenuItem>
              <MenuItem value="false">Inactive</MenuItem>
            </TextField>
          </Stack>

          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={filteredArticles}
              columns={columns}
              disableRowSelectionOnClick
              pageSizeOptions={[10, 25]}
              initialState={{
                pagination: { paginationModel: { pageSize: 10, page: 0 } },
              }}
              sx={{
                border: "1px solid #f0f0f0",
                borderRadius: "8px",
                overflow: "hidden",

                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: "#f8fafc",
                  borderBottom: "2px solid #e5e7eb",
                },

                "& .MuiDataGrid-columnHeaderTitle": {
                  fontWeight: 900,
                  color: "#003366",
                  fontSize: "0.85rem",
                },

                "& .MuiDataGrid-iconSeparator": {
                  color: "#cbd5e1",
                },

                "& .MuiDataGrid-sortIcon": {
                  color: "#003366",
                },

                "& .MuiDataGrid-menuIconButton": {
                  color: "#003366",
                },

                "& .MuiDataGrid-cell": {
                  borderBottom: "1px solid #f0f0f0",
                  color: "#3f3f46",
                },

                "& .MuiDataGrid-row:hover": {
                  backgroundColor: "#f8fafc",
                },
              }}
            />
          </Box>
        </CardContent>
      </Card>

      <Dialog open={openModal} onClose={handleCloseModal} fullWidth maxWidth="md">
        <DialogTitle sx={{ fontWeight: 900, color: "#003366" }}>
          {editingId ? "Edit Article" : "Add Article"}
        </DialogTitle>

        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              label="Article Name / Slug"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="example: just-in"
              helperText="This becomes the article URL name. Example: /articles/just-in"
              fullWidth
              required
            />

            <TextField
              label="Article Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Example: Hindi makapasok sa school"
              fullWidth
              required
            />

            <TextField
              label="Image URL"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              helperText="Use a direct image link ending in .jpg, .png, .webp, etc."
              fullWidth
              required
            />

            <TextField
              label="Article Content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Write your article content here. Use a new line for each paragraph."
              fullWidth
              required
              multiline
              rows={6}
            />

            <TextField
              select
              label="Publish Status"
              name="isPublished"
              value={String(formData.isPublished)}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  isPublished: e.target.value === "true",
                }))
              }
              fullWidth
            >
              <MenuItem value="true">Active / Published</MenuItem>
              <MenuItem value="false">Inactive / Hidden</MenuItem>
            </TextField>
          </Stack>
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button onClick={handleCloseModal}>Cancel</Button>

          <Button
            variant="contained"
            onClick={handleSaveArticle}
            disabled={loading}
            sx={{
              backgroundColor: "#FFD700",
              color: "#003366",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#E5C100" },
            }}
          >
            {loading ? "Saving..." : editingId ? "Update Article" : "Save Article"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}