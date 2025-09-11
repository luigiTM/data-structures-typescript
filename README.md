# Data Structures and Algorithms in TypeScript

This project implements fundamental data structures and sorting algorithms in TypeScript. It serves as an educational resource for understanding core computer science concepts through practical implementations.

## Data Structures Implemented

### 1. Array (Vetor)

- Basic array implementation with dynamic operations
- Features:
  - Insertion
  - Deletion
  - Search
  - Display operations
  - Size tracking

### 2. Ordered Array (Vetor Ordenado)

- An array that maintains elements in sorted order
- Implements binary search for efficient lookups

### 3. Stack (Pilha)

- Classic LIFO (Last-In-First-Out) data structure
- Operations:
  - Push (`colocar`)
  - Pop (`retirar`)
  - Peek (`espiar`)
  - Empty check
  - Full check

### 4. Queue (Fila)

- FIFO (First-In-First-Out) implementation
- Features:
  - Enqueue (`inserir`)
  - Dequeue (`remover`)
  - Peek front element (`espiarInicio`)
  - Empty/Full checks
  - Size tracking

### 5. Linked List (Lista Encadeada)

- Singly linked list implementation
- Operations:
  - Insert at front
  - Remove from front
  - Display list
  - Empty check
- Uses a separate `Link` class for nodes

## Sorting Algorithms

The project includes three classic sorting algorithm implementations:

### 1. Bubble Sort (Método Bolha)

- Implementation in `VetorBolha` class
- Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order
- Time Complexity: O(n²)

### 2. Selection Sort (Ordenação por Seleção)

- Implementation in `VetorSelecao` class
- Divides the input into a sorted and an unsorted region
- Repeatedly selects the smallest element from the unsorted region
- Time Complexity: O(n²)

### 3. Insertion Sort (Ordenação por Inserção)

- Implementation in `VetorInsercao` class
- Builds the final sorted array one item at a time
- Efficient for small data sets and nearly sorted arrays
- Time Complexity: O(n²)

## Project Structure

```
src/
├── app.ts                     # Main application entry point
├── fila/                      # Queue implementation
├── lista-encadeada/          # Linked List implementation
├── ordenacao-simples/        # Simple sorting algorithms
│   ├── metodo-bolha/         # Bubble Sort
│   ├── ordenacao-insercao/   # Insertion Sort
│   └── ordenacao-selecao/    # Selection Sort
├── pilha/                    # Stack implementation
├── vetor/                    # Array implementation
└── vetor-ordenado/          # Ordered array implementation
```

## Technical Details

- Written in TypeScript
- Each data structure and algorithm has its own implementation file and demo application
- Includes test cases and example usage
- Clean, well-documented code with clear method names in Portuguese

## Usage

Each data structure and algorithm comes with an accompanying application file (`*-app.ts`) that demonstrates its usage. These files contain example code showing how to:

- Initialize the data structure
- Perform basic operations
- Test different scenarios
- Display results

## Educational Value

This project is particularly useful for:

- Learning fundamental data structures
- Understanding basic sorting algorithms
- Studying TypeScript implementations of classic CS concepts
- Practicing with different data structure operations

## Development

The project uses TypeScript and includes proper configuration for development. To get started:

1. Install dependencies:

```bash
npm install
```

2. Run TypeScript compiler:

```bash
npm run build
```

3. Execute the examples:

```bash
npm start
```
